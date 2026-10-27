# Auditoría Completa del Sitio — Santuario Ajolote · CIMA A.C.

**Fecha:** 2026-10-27
**Dominio principal:** https://axolotfinder.org
**Plataforma:** https://axolotofinder.base44.app
**Framework:** React + Vite + Tailwind CSS

## Resumen Ejecutivo

| Métrica | Valor |
|---------|-------|
| Total de rutas | 51 |
| Páginas visibles (públicas) | 40 |
| Páginas privadas (no enlazadas) | 11 |
| Cobertura multilingüe (ES/EN) | 100% |
| Cobertura responsiva (mobile/tablet/desktop) | 100% |
| Cobertura SEO | 100% |
| Cobertura Geo-tags | 100% |
| Cobertura OG image | 100% |

## Páginas Visibles (Públicas)

### Home — `/`
- **Archivo:** src/pages/Home.jsx
- **Categoría:** principal
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebSite
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Santuario Ajolote · Axolot Finder: unimos ciencia, comunidad y turismo comunitario para rescatar al ajolote mexicano (Ambystoma mexicanum) y restaurar su hábitat en Xochimilco.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ Sighting
- **Enlazada desde:** navbar

### Observatorio — `/science`
- **Archivo:** src/pages/Science.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Ciencia del ajolote mexicano: biología, regeneración, genómica y conservación en Xochimilco. Investigaciones sobre Ambystoma mexicanum. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ✅ · **Fotos:** ✅
- **Base de datos:** ✅ ScientificPublication, HistoricalDocument
- **Enlazada desde:** navbar

### Acciones 2026 — `/acciones-2026`
- **Archivo:** src/pages/Acciones2026.jsx
- **Categoría:** proyectos
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema CollectionPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Proyectos 2026 del Santuario Ajolote: rescate del hábitat del ajolote, tortuga casquito, chile chicuarote, red de biofiltros y laboratorio de reproducción en Coyoacán.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** navbar

### Voluntariado — `/voluntariado`
- **Archivo:** src/pages/Voluntariado.jsx
- **Categoría:** comunidad
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Únete al voluntariado del Santuario Ajolote: brigadas presenciales y unidades remotas para el rescate del ajolote y la restauración de Xochimilco.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ VoluntarioRegistro
- **Enlazada desde:** navbar, public

### Turismo Responsable — `/turismo-responsable`
- **Archivo:** src/pages/TurismoResponsable.jsx
- **Categoría:** turismo
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema TouristAttraction
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Turismo ecológico y comunitario en Xochimilco: trajineras con remo manual, chinampas vivas y rescate del ajolote. 100% sin fines de lucro. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ✅ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** navbar, home

### Quiénes Somos — `/quienes-somos`
- **Archivo:** src/pages/QuienesSomos.jsx
- **Categoría:** institucional
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema NGO
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** CIMA A.C. (Santuario Ajolote): asociación civil mexicana dedicada al rescate del ajolote mexicano y la restauración del humedal de Xochimilco desde 2019. Ciencia, comunidad y defensa legal.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** navbar

### Avistamientos — `/sightings`
- **Archivo:** src/pages/Sightings.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Registra avistamientos del ajolote mexicano en Xochimilco. Cada reporte ayuda al rescate del ajolote. Ciencia ciudadana del Santuario Ajolote · CIMA A.C.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ Sighting, SpecimenMedia
- **Enlazada desde:** home, science

### Genética — `/genetics`
- **Archivo:** src/pages/Genetics.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Base de datos genética del ajolote mexicano para prevenir su extinción. Linajes, diversidad genética y compatibilidad reproductiva. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ GeneticRecord, SpecimenMedia
- **Enlazada desde:** science, home

### Mapa de Conservación — `/map`
- **Archivo:** src/pages/ConservationMap.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Mapa interactivo del hábitat del ajolote en Xochimilco: avistamientos, zonas de conservación y actores. Santuario Ajolote · CIMA A.C.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ Sighting, EnvironmentalReport, Actor
- **Enlazada desde:** science, home

### Ajolote Silvestre — `/wild-sightings`
- **Archivo:** src/pages/WildSightings.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** ¿Viste un ajolote silvestre en Xochimilco? Reporta tu avistamiento y contribuye al rescate del ajolote mexicano. Santuario Ajolote · CIMA A.C.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ Sighting
- **Enlazada desde:** home, science

### Foro Comunitario — `/forum`
- **Archivo:** src/pages/Forum.jsx
- **Categoría:** comunidad
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Únete a la comunidad del Santuario Ajolote: foro de debate, ciencia ciudadana y colaboración para el rescate del ajolote mexicano en Xochimilco.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ❌
- **Base de datos:** ✅ ForumPost
- **Enlazada desde:** science, home

### Reporte de Incidencia — `/reporte-incidencia`
- **Archivo:** src/pages/ReporteIncidencia.jsx
- **Categoría:** denuncia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Reporta contaminación, derrames o daño ambiental en Xochimilco. El Santuario Ajolote canaliza tu denuncia a las autoridades competentes. CIMA A.C.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ EnvironmentalReport
- **Enlazada desde:** home, conservation

### Denuncia San Gregorio — `/denuncia-contaminacion-san-gregorio`
- **Archivo:** src/pages/DenunciaContaminacionSanGregorio.jsx
- **Categoría:** denuncia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · San Gregorio Atlapulco, Xochimilco
- **OG Description:** Denuncia ciudadana por contaminación en San Gregorio Atlapulco, Xochimilco. El Santuario Ajolote documenta y da seguimiento legal a cada reporte.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ EnvironmentalReport
- **Enlazada desde:** home, acciones-2026

### Red de Biofiltros — `/red-de-biofiltros`
- **Archivo:** src/pages/RedDeBiofiltros.jsx
- **Categoría:** proyectos
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema EnvironmentalProject
- **Geo:** MX-CMX · San Gregorio Atlapulco, Xochimilco
- **OG Description:** Infraestructura ecológica de bajo costo para restaurar el agua de los canales de Xochimilco: biofiltros, humedales artificiales y estaciones solares en San Gregorio Atlapulco.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ BiofilterRequest
- **Enlazada desde:** home, acciones-2026

### Acciones Legales — `/acciones-legales`
- **Archivo:** src/pages/AccionesLegales.jsx
- **Categoría:** denuncia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Acciones legales del Santuario Ajolote para la defensa del humedal de Xochimilco y el rescate del ajolote mexicano. CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home, acciones-2026

### Carta Ramsar — `/carta-ramsar`
- **Archivo:** src/pages/CartaRamsar.jsx
- **Categoría:** denuncia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Carta dirigida a la Convención de Ramsar sobre el estado del humedal de Xochimilco y el rescate del ajolote mexicano. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home

### Observatorio Cempasúchil — `/observatorio-cempasuchil`
- **Archivo:** src/pages/ObservatorioCempasuchil.jsx
- **Categoría:** investigacion
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema ScholarlyArticle
- **Geo:** MX-CMX · San Gregorio Atlapulco, Xochimilco
- **OG Description:** Investigación científica sobre cempasúchil en Xochimilco: biopiratería, patentes, híbridos F1, toxicología ambiental, ecotoxicología y efectos sobre el ajolote mexicano (Ambystoma mexicanum). Día de Muertos 2026.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home

### Ciencia Mexicana Cempasúchil — `/ciencia-mexicana-cempasuchil`
- **Archivo:** src/pages/CienciaMexicanaCempasuchil.jsx
- **Categoría:** investigacion
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Ciencia mexicana del cempasúchil: investigación, conservación y mejoramiento genético de Tagetes erecta. Contraparte institucional a la biopiratería internacional.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** observatorio-cempasuchil

### Reportaje Drenajes — `/reportaje-drenajes`
- **Archivo:** src/pages/ReportajeDrenajesPage.jsx
- **Categoría:** investigacion
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Investigación del Santuario Ajolote sobre drenajes, descargas ilegales y contaminación en el humedal de Xochimilco. Datos, mapas y denuncias.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home, science

### Zona de Sacrificio — `/zona-de-sacrificio`
- **Archivo:** src/pages/ZonaSacrificio.jsx
- **Categoría:** investigacion
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Investigación especial del Santuario Ajolote sobre la ecología de la injusticia ambiental en Xochimilco y su impacto en el ajolote mexicano.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home, science

### Actores Ambientales — `/actores`
- **Archivo:** src/pages/Actores.jsx
- **Categoría:** denuncia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Directorio de actores ambientales en Xochimilco: quienes protegen y quienes dañan el hábitat del ajolote. Santuario Ajolote · CIMA A.C.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ Actor
- **Enlazada desde:** conservation, science

### Santuario Ajolote — `/santuario-ajolote`
- **Archivo:** src/pages/SantuarioAjolote.jsx
- **Categoría:** institucional
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema NGO
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** El Santuario Ajolote es la iniciativa de CIMA A.C. para rescatar al ajolote mexicano (Ambystoma mexicanum) y restaurar su hábitat en Xochimilco. Dona y participa.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ Donation
- **Enlazada desde:** quienes-somos, home

### Historia Xochimilco — `/historia-xochimilco`
- **Archivo:** src/pages/HistoriaXochimilco.jsx
- **Categoría:** institucional
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Historia de Xochimilco: patrimonio UNESCO, chinampas prehispánicas y el ajolote mexicano. Archivo histórico del Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ✅ HistoricalDocument
- **Enlazada desde:** science

### Día de Muertos — `/dia-de-muertos`
- **Archivo:** src/pages/DiaDeMuertos.jsx
- **Categoría:** turismo
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Día de Muertos en Xochimilco: tradición, cempasúchil y conservación del ajolote mexicano. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** turismo-responsable, home

### Infografías IA — `/infografia-ai`
- **Archivo:** src/pages/InfografiaAI.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebApplication
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Infografías generadas con IA sobre el ajolote mexicano, su hábitat y conservación en Xochimilco. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** science

### Videoteca — `/video-galeria`
- **Archivo:** src/pages/VideoGaleria.jsx
- **Categoría:** ciencia
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Videoteca del Santuario Ajolote: documentales, investigaciones y videos del ajolote mexicano y su hábitat en Xochimilco.
- **Mapa:** ❌ · **Video:** ✅ · **Fotos:** ❌
- **Base de datos:** ❌
- **Enlazada desde:** science

### Rescate 7 Chinampas — `/proyectos/rescate-7-chinampas`
- **Archivo:** src/pages/RescateChinampas.jsx
- **Categoría:** proyectos
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Project
- **Geo:** MX-CMX · San Gregorio Atlapulco, Xochimilco
- **OG Description:** Restauración hidrológica y recuperación de chinampas en San Gregorio Atlapulco, Xochimilco. Proyecto del Santuario Ajolote para rescatar el hábitat del ajolote mexicano.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** acciones-2026, home

### Chile Chicuarote — `/proyectos/chile-chicuarote`
- **Archivo:** src/pages/ChileChicuarote.jsx
- **Categoría:** proyectos
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Project
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Rescate del chile chicuarote nativo de Xochimilco: agricultura tradicional, economía circular y conservación biocultural. Un proyecto del Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** acciones-2026, home

### Refugio Tortuga Casquito — `/proyectos/refugio-tortuga-casquito`
- **Archivo:** src/pages/TortugaCasquito.jsx
- **Categoría:** proyectos
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Project
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Refugio de la tortuga casquito (Kinosternon integrum) en Xochimilco. Investigación, conservación y educación ambiental del Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** acciones-2026, home

### Laboratorio Coyoacán — `/proyectos/laboratorio-reproduccion-coyoacan`
- **Archivo:** src/pages/LaboratorioCoyoacan.jsx
- **Categoría:** proyectos
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Project
- **Geo:** MX-CMX · Coyoacán, CDMX
- **OG Description:** Laboratorio de reproducción y conservación genética del ajolote mexicano en Coyoacán. Conecta la ciencia con las cooperativas de Xochimilco. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** acciones-2026, home

### Informe Colorimetría — `/informe-colorimetria-san-gregorio`
- **Archivo:** src/pages/InformeColorimetriaSanGregorio.jsx
- **Categoría:** investigacion
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · San Gregorio Atlapulco, Xochimilco
- **OG Description:** Informe técnico de tamizaje colorimétrico del agua en San Gregorio Atlapulco, Xochimilco. Análisis de calidad del agua y monitoreo de contaminantes. Santuario Ajolote.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home

### Monitoreo Atenco — `/monitoreo-contaminantes-atenco`
- **Archivo:** src/pages/MonitoreoAtenco.jsx
- **Categoría:** investigacion
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Monitoreo de contaminantes en el drenaje Atenco, Xochimilco. Análisis de 4 puntos de muestreo 2024-2026. Santuario Ajolote · CIMA A.C.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** home

### Batalla por la Playa — `/playacocinas`
- **Archivo:** src/pages/BatallaPorLaPlaya.jsx
- **Categoría:** turismo
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema Article
- **Geo:** MX-NAY · Playa Las Cocinas, Punta de Mita, Nayarit
- **OG Description:** Conoce la historia de Batalla por la Playa en Playa Las Cocinas, Punta de Mita, Nayarit: defensa comunitaria, justicia ambiental, ZOFEMAT, restauración y turismo responsable.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** turismo-responsable, home

### Turismo Playa Cocinas — `/playacocinas/turismo`
- **Archivo:** src/pages/TurismoPlayaCocinas.jsx
- **Categoría:** turismo
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema TouristAttraction
- **Geo:** MX-NAY · Playa Las Cocinas, Punta de Mita, Nayarit
- **OG Description:** Turismo comunitario en Playa Las Cocinas, Punta de Mita, Nayarit. Experiencias con los defensores de la playa. Santuario Ajolote.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** batalla-por-la-playa

### Playa Nayarit — `/playa`
- **Archivo:** src/pages/Playa.jsx
- **Categoría:** turismo
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema TouristDestination
- **Geo:** MX-NAY · Punta de Mita, Nayarit
- **OG Description:** Turismo ecológico comunitario en Punta de Mita y Higuera Blanca, Nayarit. Surf, pesca responsable, senderismo y hospedaje con anfitriones locales que defienden las playas.
- **Mapa:** ✅ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** turismo-responsable, home

### Voluntariado Remoto — `/voluntariado/remoto`
- **Archivo:** src/pages/VoluntariadoRemotoPage.jsx
- **Categoría:** comunidad
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Voluntariado remoto del Santuario Ajolote: unidad de operaciones especiales para apoyar el rescate del ajolote desde cualquier lugar del mundo.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** voluntariado

### Brigadas de Conservación — `/voluntariado/brigadas`
- **Archivo:** src/pages/VoluntariadoBrigadasPage.jsx
- **Categoría:** comunidad
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Brigadas presenciales del Santuario Ajolote en Xochimilco: restauración de chinampas, monitoreo del ajolote y trabajo de campo con la comunidad.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** voluntariado

### Guardián Ajolote — `/certificado`
- **Archivo:** src/pages/GuardianAjolote.jsx
- **Categoría:** comunidad
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Certificado Guardián del Ajolote: reconocimiento a quienes contribuyen al rescate del ajolote mexicano. Santuario Ajolote · CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** voluntariado

### Acerca de — `/about`
- **Archivo:** src/pages/About.jsx
- **Categoría:** institucional
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Acerca del Santuario Ajolote: misión, visión y equipo detrás del rescate del ajolote mexicano en Xochimilco. CIMA A.C.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ✅
- **Base de datos:** ❌
- **Enlazada desde:** quienes-somos, footer

### Contacto — `/contacto`
- **Archivo:** src/pages/Contact.jsx
- **Categoría:** institucional
- **Multilingüe:** ✅ ES/EN
- **Responsivo:** Móvil ✅ · Tablet ✅ · Desktop ✅
- **SEO:** Title ✅ · Desc ✅ · Schema WebPage
- **Geo:** MX-CMX · Xochimilco, CDMX
- **OG Description:** Contacto del Santuario Ajolote · CIMA A.C. Escríbenos para participar en el rescate del ajolote mexicano y la conservación de Xochimilco.
- **Mapa:** ❌ · **Video:** ❌ · **Fotos:** ❌
- **Base de datos:** ❌
- **Enlazada desde:** quienes-somos, footer


## Páginas NO Visibles (Privadas)

### Perfil de Usuario — `/profile`
- **Archivo:** src/pages/UserProfile.jsx
- **Razón:** Requiere login. Solo visible para usuarios autenticados.
- **Categoría:** privado-usuario

### Panel de Moderación — `/moderation`
- **Archivo:** src/pages/ModerationPanel.jsx
- **Razón:** Solo admin. Panel de administración para verificación de contenido.
- **Categoría:** privado-admin

### Ajolote Mágico — `/magic-axolotl`
- **Archivo:** src/pages/MagicAxolotl.jsx
- **Razón:** Coleccionables digitales privados. No enlazado desde navegación pública.
- **Categoría:** privado-usuario

### Mi Galería — `/mi-galeria`
- **Archivo:** src/pages/UserGallery.jsx
- **Razón:** Galería personal de usuario. Requiere login.
- **Categoría:** privado-usuario

### Chinampas Virtuales — `/chinampas`
- **Archivo:** src/pages/ChinampasVirtuales.jsx
- **Razón:** Sistema de adopción de parcelas. No enlazado desde navegación pública.
- **Categoría:** privado-sistema

### Casino del Ajolote — `/casino`
- **Archivo:** src/pages/Casino.jsx
- **Razón:** Juegos con ajolopesos. No enlazado desde navegación pública.
- **Categoría:** privado-sistema

### Publicar Instagram — `/publicar-instagram`
- **Archivo:** src/pages/PublicarInstagram.jsx
- **Razón:** Herramienta administrativa para publicar en redes sociales.
- **Categoría:** privado-admin

### Migración SEO — `/migracion-seo`
- **Archivo:** src/pages/MigracionSEO.jsx
- **Razón:** Herramienta interna de migración SEO. No pública.
- **Categoría:** privado-admin

### Perfil de Especimen — `/genetics/:id`
- **Archivo:** src/pages/SpecimenProfile.jsx
- **Razón:** Ruta dinámica. Solo accesible desde la página de genética.
- **Categoría:** dinamico

### Detalle de Proyecto — `/proyectos/:slug`
- **Archivo:** src/pages/ProyectoDetalle.jsx
- **Razón:** Ruta dinámica. Solo accesible desde Acciones 2026.
- **Categoría:** dinamico

### Borahae Ajolote — `/borahae`
- **Archivo:** src/pages/BorahaeAjolote.jsx
- **Razón:** Campaña especial. Ruta pública pero no enlazada desde navegación principal.
- **Categoría:** publico-no-enlazado


## Entidades de Base de Datos

- **Sighting:** Avistamientos de ajolote registrados por ciudadanos (pública) 🗺️ 📷
- **GeneticRecord:** Registros genéticos de especimenes de ajolote (pública)  📷
- **SpecimenMedia:** Fotos y videos de especimenes (pública)  📷
- **EnvironmentalReport:** Reportes y denuncias de contaminación (pública) 🗺️ 📷
- **Actor:** Actores ambientales en Xochimilco (pública) 🗺️ 📷
- **ScientificPublication:** Publicaciones científicas enviadas por investigadores (pública) 🗺️ 
- **HistoricalDocument:** Documentos históricos de Xochimilco (pública)  📷
- **ForumPost:** Posts del foro comunitario (pública)  
- **Donation:** Donaciones recibidas (privada)  
- **VoluntarioRegistro:** Registros de voluntarios (privada)  
- **BiofilterRequest:** Solicitudes de biofiltros (privada)  
- **ChinampaProject:** Proyectos de chinampas (pública) 🗺️ 📷
- **ChinampaParcel:** Parcelas de chinampas (privada) 🗺️ 📷
- **MagicAxolotl:** Coleccionables digitales de ajolotes (privada)  📷
- **MagicAxolotlPurchase:** Compras de coleccionables (privada)  
- **DynamicPrice:** Precios dinámicos de coleccionables (pública)  
- **UserRewards:** Recompensas de usuarios (ajolopesos) (privada)  
- **AjolopesosTransfer:** Transferencias de ajolopesos (privada)  
- **UserProfile:** Perfiles de usuario (pública)  📷
- **UserMessage:** Mensajes entre usuarios (privada)  
- **TourContract:** Contratos de tours (privada)  
- **UserGallery:** Galerías de usuario (privada)  📷
- **ConservationProject:** Proyectos de conservación (pública) 🗺️ 📷

## Mapas Interactivos

- **/map:** Mapa principal de conservación con capas ambientales, avistamientos y actores
- **/sightings:** Mapa de avistamientos de ajolote
- **/wild-sightings:** Mapa de avistamientos silvestres
- **/reporte-incidencia:** Mapa para reportar incidencias ambientales
- **/actores:** Mapa de actores ambientales
- **/monitoreo-contaminantes-atenco:** Mapa de 4 puntos de monitoreo de contaminantes
- **/playacocinas:** Mapa de Playa Las Cocinas, Nayarit
- **/playa:** Mapa de playas de Punta de Mita, Nayarit

## Estado del SEO y OG Descriptions

Todas las páginas visibles cuentan con:
- ✅ Title tag bilingüe (ES/EN)
- ✅ Meta description bilingüe y descriptiva del contenido de cada página
- ✅ Meta keywords con términos geográficos y temáticos
- ✅ Canonical URL
- ✅ Hreflang (es, en, x-default)
- ✅ Open Graph (og:title, og:description, og:image, og:type)
- ✅ Twitter Card
- ✅ Schema.org JSON-LD con @graph
- ✅ Geo tags (geo.region, geo.placename, geo.position, ICBM)

## Recomendaciones

1. **Google Search Console:** Verificar indexación completa de todas las páginas visibles
2. **Sitemap:** Actualizar sitemap.xml con todas las rutas visibles
3. **Robots.txt:** Asegurar que las páginas privadas no sean indexadas
4. **OG Images:** Algunas páginas usan la imagen por defecto; considerar imágenes específicas
5. **Performance:** Optimizar imágenes de media.base44.com con lazy loading
