import { motion } from "framer-motion";
import { Shield, Sparkles, ArrowLeft } from "lucide-react";
import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";

interface Punto4DebriefProps {
  onBack: () => void;
  onRetry: () => void;
}

const Punto4Debrief = ({ onBack, onRetry }: Punto4DebriefProps) => {
  const [dimensions, setDimensions] = useState({ w: 800, h: 600 });

  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });

    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const speechTexto = "¡Misión cumplida! Excelente análisis logístico. Tú mismo hiciste la cuenta completa. Primero, esquivaste la cascarita de los segundos. Segundo, descubriste que salvar diez mil doscientos minutos inútiles equivale a ciento setenta horas de trabajo. Y al final, te diste cuenta de la verdadera magia: matemáticamente le ahorraste a la fábrica pagar más de veintiún salarios de empleados que solo iban a estar perdidos en la bodega. ¡Eres un gerente brillante!";
        const speech = new SpeechSynthesisUtterance(speechTexto);
        speech.lang = 'es-ES';
        speech.pitch = 1.3;
        speech.rate = 0.95;
        const voces = window.speechSynthesis.getVoices();
        const vozFemenina = voces.find(v =>
          v.lang.startsWith('es') &&
          (v.name.includes('Female') || v.name.includes('Mujer') || v.name.includes('Sabina') || v.name.includes('Mia'))
        );
        if (vozFemenina) speech.voice = vozFemenina;
        window.speechSynthesis.speak(speech);
      }
    } catch (error) {
      console.error(error);
    }

    return () => {
      try { window.speechSynthesis.cancel(); } catch {}
    };
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 bg-background">
      <ReactConfetti
        width={dimensions.w}
        height={dimensions.h}
        recycle={false}
        numberOfPieces={500}
        colors={['#38bdf8', '#0ea5e9', '#10b981', '#34d399', '#fbbf24']}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-lg border-2 border-sky-400 bg-sky-400/10 p-6"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Shield className="h-16 w-16 text-sky-400 drop-shadow-[0_0_30px_hsl(199,89%,48%)]" />
          </motion.div>

          <h2 className="mt-4 font-orbitron text-2xl font-black text-sky-400 md:text-3xl">
            🚀 BODEGA OPTIMIZADA CON ÉXITO
          </h2>

          <div className="mt-2 flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="font-orbitron text-xs font-bold text-amber-400">
              SISTEMA WMS VALIDADO
            </span>
            <Sparkles className="h-4 w-4 text-amber-400" />
          </div>

          {/* Two comparison boxes */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-8 w-full max-w-4xl mx-auto">
            <div className="flex-1 bg-red-950/30 border border-red-800/80 rounded-xl p-6 text-center">
              <p className="text-red-400 text-sm font-black tracking-widest mb-2 uppercase">💥 Caos Manual</p>
              <p className="text-red-500 text-4xl font-black font-mono">12.750</p>
              <p className="text-red-300/70 text-xs mt-2 uppercase font-bold tracking-wider">Minutos Perdidos</p>
            </div>
            <div className="flex-1 bg-emerald-950/30 border border-emerald-500 rounded-xl p-6 text-center shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <p className="text-emerald-400 text-sm font-black tracking-widest mb-2 uppercase">✅ Ahorro Total</p>
              <p className="text-emerald-400 text-4xl font-black font-mono drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">21,25</p>
              <p className="text-emerald-300/70 text-xs mt-2 uppercase font-bold tracking-wider">Turnos Ahorrados</p>
            </div>
          </div>

          {/* Lesson */}
          <div className="mt-8 text-left bg-slate-800/80 p-6 rounded-lg border-l-4 border-sky-400 w-full">
            <p className="text-xl text-sky-400 font-black mb-2">💡 LA LECCIÓN GERENCIAL:</p>
            <p className="text-slate-300 text-lg leading-relaxed">
              ¡Tú mismo hiciste el cálculo! Esquivaste la trampa de los segundos, pasaste a minutos, y descubriste el verdadero impacto de la tecnología. Al realizar la conversión final, comprobaste que salvar <strong className="text-emerald-400">10.200 minutos</strong> equivale exactamente a regalarle a la empresa <strong className="text-emerald-400">170 horas de trabajo libre</strong>.
              <br/><br/>
              Como gerente, le acabas de ahorrar a la empresa tener que contratar y pagarle a <strong className="text-white bg-slate-900 px-2 py-1 rounded">21 operarios extras hoy</strong> que solo habrían caminado perdidos por la bodega. ¡La tecnología no es un gasto, es rentabilidad pura!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onRetry}
              className="flex items-center justify-center gap-2 rounded-lg bg-slate-800 hover:bg-slate-700 px-6 py-3 font-orbitron text-sm font-bold text-slate-300 hover:text-white border border-slate-600 transition-colors uppercase"
            >
              ⬅️ VOLVER Y REVISAR
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                try { window.speechSynthesis.cancel(); } catch {}
                onBack();
              }}
              className="flex items-center gap-2 rounded border border-muted px-6 py-3 font-orbitron text-sm font-bold text-muted-foreground transition-colors hover:bg-muted/20"
            >
              <ArrowLeft className="h-4 w-4" /> VOLVER AL MENÚ
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Punto4Debrief;
