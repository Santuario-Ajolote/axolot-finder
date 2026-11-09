import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Loader2, Copy, Check, AlertTriangle, ArrowUpRight } from 'lucide-react';

export default function BorradorDenuncia({ tipos = [] }) {
  const [form, setForm] = useState({
    tipo: tipos[0]?.id || 'descarga',
    fecha: '',
    ubicacion: '',
    hechos: '',
    denunciado: '',
    evidencia: '',
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const set = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setResult(null);
    setLoading(true);
    try {
      const res = await base44.functions.invoke('anpLegalConsult', { mode: 'borrador', ...form });
      if (res.data?.error) setError(res.data.error);
      else setResult(res.data);
    } catch (e) {
      setError(e?.response?.data?.error || 'No se pudo generar el borrador. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const copy = async () => {
    if (!result?.borrador) return;
    await navigator.clipboard.writeText(result.borrador);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-4 space-y-3">
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-bold text-foreground">Genera tu borrador de denuncia popular</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs">Tipo de hecho</Label>
            <Select value={form.tipo} onValueChange={(value) => setForm((prev) => ({ ...prev, tipo: value }))}>
              <SelectTrigger className="text-sm">
                <SelectValue placeholder="Selecciona" />
              </SelectTrigger>
              <SelectContent>
                {tipos.map((t) => (
                  <SelectItem key={t.id} value={t.id}>{t.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Fecha de los hechos</Label>
            <Input type="date" value={form.fecha} onChange={set('fecha')} className="text-sm" />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs">Ubicación exacta</Label>
          <Input
            value={form.ubicacion}
            onChange={set('ubicacion')}
            placeholder="Canal, calle, chinampa, coordenadas o referencia"
            className="text-sm"
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label className="text-xs">¿Qué está pasando?</Label>
          <Textarea
            value={form.hechos}
            onChange={set('hechos')}
            rows={4}
            placeholder="Describe lo que viste, cuándo y quién lo hace, si lo sabes."
            className="text-sm"
            required
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label className="text-xs">Posible responsable (opcional)</Label>
            <Input value={form.denunciado} onChange={set('denunciado')} placeholder="Nombre, obra o empresa" className="text-sm" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Evidencia con la que cuentas (opcional)</Label>
            <Input value={form.evidencia} onChange={set('evidencia')} placeholder="Fotos, video, testigos" className="text-sm" />
          </div>
        </div>

        {error && <p className="text-xs text-red-600">{error}</p>}

        <Button type="submit" disabled={loading} className="w-full bg-emerald-700 hover:bg-emerald-800 gap-2">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
          {loading ? 'Redactando…' : 'Generar borrador'}
        </Button>
      </form>

      {result && (
        <div className="rounded-2xl border border-emerald-200 bg-white p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-bold text-foreground">Borrador listo</p>
            <Button size="sm" variant="outline" onClick={copy} className="gap-1.5 text-xs">
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copiado' : 'Copiar texto'}
            </Button>
          </div>
          <div className="rounded-xl bg-emerald-50/60 border border-emerald-100 p-3 text-xs leading-relaxed whitespace-pre-wrap text-foreground/85 max-h-[420px] overflow-y-auto">
            {result.borrador}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Dónde presentarla</p>
            <div className="space-y-1.5">
              {(result.canales || []).map((c) => (
                <a
                  key={c.id}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-xs hover:bg-emerald-50"
                >
                  <span>
                    <span className="font-bold text-foreground">{c.nombre}</span>
                    {c.telefono ? ` · ${c.telefono}` : ''}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
                </a>
              ))}
            </div>
          </div>

          <p className="flex items-start gap-1.5 text-[11px] text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-2.5 py-2">
            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            {result.advertencia}
          </p>
        </div>
      )}
    </div>
  );
}