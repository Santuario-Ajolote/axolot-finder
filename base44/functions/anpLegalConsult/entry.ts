import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';
import { ANP, AUTORIDADES, CANALES, MAPAS, MARCO_LEGAL, TIPOS_DENUNCIA, buildContext } from '../../shared/anpLegalCorpus.ts';

export default async function (req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const mode = body.mode || 'directorio';

    if (mode === 'directorio') {
      return Response.json({
        anp: ANP,
        autoridades: AUTORIDADES,
        canales: CANALES,
        mapas: MAPAS,
        marcoLegal: MARCO_LEGAL,
        tiposDenuncia: TIPOS_DENUNCIA,
      });
    }

    if (mode !== 'borrador') {
      return Response.json({ error: 'mode no válido' }, { status: 400 });
    }

    const user = await base44.auth.me().catch((e) => (e.status === 401 ? null : Promise.reject(e)));
    if (!user) {
      return Response.json({ error: 'Inicia sesión para generar un borrador' }, { status: 401 });
    }

    const hechos = String(body.hechos || '').slice(0, 3000).trim();
    const ubicacion = String(body.ubicacion || '').slice(0, 300).trim();
    if (!hechos || !ubicacion) {
      return Response.json({ error: 'Describe los hechos y la ubicación' }, { status: 400 });
    }

    const tipo = TIPOS_DENUNCIA.find((t) => t.id === body.tipo) || TIPOS_DENUNCIA[0];
    const canales = CANALES.filter((c) => tipo.canales.includes(c.id));
    const contacto = String(body.contacto || user.email || '').slice(0, 200);
    const nombre = String(body.nombre || user.full_name || '').slice(0, 120);
    const fecha = String(body.fecha || '').slice(0, 40);
    const denunciado = String(body.denunciado || '').slice(0, 300);
    const evidencia = String(body.evidencia || '').slice(0, 500);

    const prompt = `Eres especialista legal en el Área Natural Protegida "Ejidos de Xochimilco y San Gregorio Atlapulco" en la Ciudad de México.
Redacta un BORRADOR de denuncia popular en español, listo para presentarse ante la autoridad, con estas reglas:
- Usa exclusivamente el marco legal del contexto. No inventes artículos, números de expediente ni datos de contacto.
- Estructura: (1) DENUNCIA POPULAR; (2) datos del denunciante; (3) autoridad destinataria propuesta y por qué es competente; (4) hechos narrados en orden cronológico con lugar y fecha; (5) fundamento jurídico aplicable citando ley y, solo si aparece en el contexto, el artículo; (6) peticiones concretas (inspección, medidas de seguridad, restauración, sanción); (7) datos del denunciado si existen; (8) pruebas o evidencia disponible; (9) protesta de decir verdad y solicitud de notificaciones.
- Tono formal, claro, sin adornos. Entre 350 y 600 palabras.
- No incluyas recomendaciones fuera del texto de la denuncia: el texto debe ser únicamente la denuncia.
- Si falta un dato, escribe un espacio entre corchetes para que la persona lo complete. Nunca calcules ni supongas fechas, domicilios o nombres: si la persona describió el tiempo de forma aproximada, escribe [fecha aproximada de inicio] y repite solo el dato de fecha que sí proporcionó.

CONTEXTO
${buildContext()}

TIPO DE HECHO: ${tipo.label}
FECHA DE LOS HECHOS: ${fecha || '[fecha]'}
UBICACIÓN: ${ubicacion}
HECHOS DESCRITOS POR LA PERSONA: ${hechos}
POSIBLE RESPONSABLE: ${denunciado || '[por identificar]'}
EVIDENCIA DISPONIBLE: ${evidencia || '[sin evidencia descrita]'}
DENUNCIANTE: ${nombre || '[nombre]'} · ${contacto || '[contacto]'}`;

    const texto = await base44.integrations.Core.InvokeLLM({ prompt });

    return Response.json({
      borrador: typeof texto === 'string' ? texto : String(texto),
      tipo: tipo.label,
      canales,
      advertencia:
        'Este borrador es orientación general y no sustituye la asesoría de una persona abogada. Verifica los datos de contacto en las páginas oficiales antes de presentarlo.',
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}