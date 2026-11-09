import React, { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Scale, Send, Loader2 } from 'lucide-react';

const AGENT = 'abogado_anp';
const STORAGE_KEY = 'anp_legal_conversation';

const SUGERENCIAS = [
  '¿Puedo construir una casa dentro del ANP de Xochimilco?',
  'Quiero denunciar una descarga de aguas negras al canal',
  '¿Quién es la autoridad responsable del ANP?',
];

function ToolChip({ toolCall }) {
  const label = toolCall.display_projection?.label || toolCall.name;
  const running = ['pending', 'running', 'in_progress'].includes(toolCall.status);
  return (
    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">
      {running ? <Loader2 className="w-3 h-3 animate-spin" /> : <Scale className="w-3 h-3" />}
      {label}
    </div>
  );
}

export default function LegalChat() {
  const [conversation, setConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    let active = true;
    let unsubscribe = () => {};
    (async () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        let conv = stored ? await base44.agents.getConversation(stored).catch(() => null) : null;
        if (!conv) {
          conv = await base44.agents.createConversation({
            agent_name: AGENT,
            metadata: { name: 'Consulta legal ANP Xochimilco' },
          });
          if (conv?.id) localStorage.setItem(STORAGE_KEY, conv.id);
        }
        if (!active || !conv) return;
        setConversation(conv);
        setMessages(conv.messages || []);
        unsubscribe = base44.agents.subscribeToConversation(conv.id, (data) => setMessages(data.messages || []));
      } catch (e) {
        if (active) setError('No se pudo iniciar la conversación. Recarga la página.');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const waiting = messages.length > 0 && messages[messages.length - 1]?.role === 'user';

  const send = async (value) => {
    const content = (value ?? text).trim();
    if (!content || !conversation || waiting) return;
    setError('');
    try {
      await base44.agents.addMessage(conversation, { role: 'user', content });
      setText('');
    } catch (e) {
      setError('No se pudo enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 bg-emerald-900 text-white">
        <Scale className="w-4 h-4" />
        <p className="text-sm font-bold">Consulta legal del ANP</p>
      </div>

      <div className="h-[420px] overflow-y-auto px-4 py-4 space-y-4 bg-emerald-50/40">
        {loading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="w-4 h-4 animate-spin" /> Abriendo el despacho…
          </div>
        )}

        {!loading && messages.length === 0 && (
          <div className="text-sm text-muted-foreground space-y-3">
            <p>
              Pregunta qué está permitido y qué no dentro del Área Natural Protegida de Xochimilco. El asistente cita la ley
              aplicable, la autoridad competente y el canal oficial para denunciar.
            </p>
            <div className="flex flex-col gap-2">
              {SUGERENCIAS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-left text-xs font-medium rounded-xl border border-emerald-200 bg-white px-3 py-2 hover:bg-emerald-50 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message, i) => (
          <div key={i} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div
              className={
                message.role === 'user'
                  ? 'max-w-[85%] rounded-2xl rounded-br-sm bg-emerald-800 text-white px-3.5 py-2 text-sm whitespace-pre-wrap'
                  : 'max-w-full rounded-2xl rounded-bl-sm bg-white border border-emerald-100 px-3.5 py-2.5 text-sm'
              }
            >
              {message.content &&
                (message.role === 'user' ? (
                  message.content
                ) : (
                  <ReactMarkdown className="prose prose-sm max-w-none prose-headings:font-heading prose-headings:text-emerald-950 prose-strong:text-emerald-900 prose-a:text-emerald-700">
                    {message.content}
                  </ReactMarkdown>
                ))}
              {message.tool_calls?.map((toolCall, idx) => <ToolChip key={idx} toolCall={toolCall} />)}
            </div>
          </div>
        ))}

        {waiting && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> Revisando la legislación aplicable…
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="border-t border-emerald-100 p-3 bg-white">
        {error && <p className="text-xs text-red-600 mb-2">{error}</p>}
        <div className="flex items-end gap-2">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            rows={2}
            placeholder="Escribe tu pregunta legal sobre el ANP…"
            className="resize-none text-sm"
          />
          <Button
            onClick={() => send()}
            disabled={!text.trim() || waiting || !conversation}
            className="h-10 w-10 p-0 bg-emerald-700 hover:bg-emerald-800"
            aria-label="Enviar"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}