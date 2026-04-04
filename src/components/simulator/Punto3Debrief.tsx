import { motion } from "framer-motion";
import { Shield, Sparkles, ArrowLeft } from "lucide-react";
import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";

interface Punto3DebriefProps {
  onBack: () => void;
  onRetry: () => void;
}

const Punto3Debrief = ({ onBack, onRetry }: Punto3DebriefProps) => {
  const [dimensions, setDimensions] = useState({ w: 800, h: 600 });

  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });

    // Speech synthesis
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const speechTexto = "¡Misión cumplida! Presta mucha atención a esta lección: Un Costo Hundido es ese dinero que ya gastaste y no puedes recuperar, como los ciento cuarenta y cuatro millones en materiales. Un mal gerente habría fabricado los zapatos para no perder las telas, botando más dinero a la basura. Tú aplicaste el Efecto Zara, aceptaste la pérdida inevitable de la tela, pero salvaste ochenta millones en efectivo. ¡Esa es una decisión financiera brillante! Reto superado.";
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
        colors={['#10b981', '#34d399', '#6ee7b7', '#fbbf24', '#f59e0b']}
        style={{ position: "fixed", top: 0, left: 0, zIndex: 50 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-lg border-2 border-crisis-green bg-crisis-green/10 p-6"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <Shield className="h-16 w-16 text-crisis-green drop-shadow-[0_0_30px_hsl(142,76%,45%)]" />
          </motion.div>

          <h2 className="mt-4 font-orbitron text-2xl font-black text-crisis-green md:text-3xl">
            ¡EFECTO ZARA ACTIVADO!
          </h2>

          <div className="mt-2 flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="font-orbitron text-xs font-bold text-amber-400">
              PRODUCCIÓN DETENIDA A TIEMPO
            </span>
            <Sparkles className="h-4 w-4 text-amber-400" />
          </div>

          <div className="mt-8 mb-8 bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl w-full max-w-4xl mx-auto">
            <h3 className="text-center text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-widest border-b border-slate-700 pb-4">
              ⚖️ BALANCE FINANCIERO DEL EFECTO ZARA
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* TARJETA DE PÉRDIDA */}
              <div className="flex-1 bg-red-950/30 border border-red-800/50 rounded-xl p-6 text-center transform transition hover:scale-105">
                <p className="text-red-400 font-bold uppercase tracking-wide text-sm mb-2">💥 CUÁNTO PERDIÓ LA EMPRESA</p>
                <p className="text-red-500 text-4xl sm:text-5xl font-black mb-2 font-mono">$ 144.000.000</p>
                <p className="text-red-300/70 text-xs uppercase font-bold tracking-wider">Costo Hundido (Suelas y Tela)</p>
              </div>
              {/* TARJETA DE AHORRO */}
              <div className="flex-1 bg-emerald-950/30 border border-emerald-500/50 rounded-xl p-6 text-center transform transition hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <p className="text-emerald-400 font-bold uppercase tracking-wide text-sm mb-2">💰 CUÁNTO SALVÓ LA EMPRESA</p>
                <p className="text-emerald-500 text-4xl sm:text-5xl font-black mb-2 font-mono drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">$ 80.000.000</p>
                <p className="text-emerald-300/70 text-xs uppercase font-bold tracking-wider">Efectivo Protegido (Nómina y Bodega)</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-5 rounded-lg border-2 border-crisis-green/50 bg-crisis-green/10 px-6 py-4"
          >
            <p className="font-orbitron text-xs text-crisis-green/80 uppercase tracking-wider">AHORRO TOTAL</p>
            <p className="font-orbitron text-3xl font-black text-crisis-green md:text-4xl mt-1">
              $ 224.000.000
            </p>
          </motion.div>

          <div className="mx-auto mt-5 grid max-w-sm grid-cols-3 gap-3 font-mono text-xs">
            <div className="rounded border border-border bg-card p-3 text-center">
              <p className="text-muted-foreground">Materiales</p>
              <p className="mt-1 text-base font-bold text-primary">$45.000</p>
            </div>
            <div className="rounded border border-border bg-card p-3 text-center">
              <p className="text-muted-foreground">Mano Obra</p>
              <p className="mt-1 text-base font-bold text-primary">$15.000</p>
            </div>
            <div className="rounded border border-border bg-card p-3 text-center">
              <p className="text-muted-foreground">Logística</p>
              <p className="mt-1 text-base font-bold text-primary">$10.000</p>
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-lg font-mono text-sm leading-relaxed text-foreground">
            <strong className="text-primary">$70.000</strong> × <strong className="text-primary">3.200 pares</strong> ={" "}
            <strong className="text-crisis-green">$224.000.000</strong> que NO se perderán en la bodega.
          </p>

          <div className="mx-auto mt-4 max-w-lg rounded-lg border border-amber-500/30 bg-amber-950/20 p-4">
            <p className="font-mono text-sm leading-relaxed text-foreground">
              <strong className="text-amber-400">¿Qué pasa si fabricamos los tenis y nadie los compra?</strong>{" "}
              Perdemos los $224 millones más el espacio de la bodega. El Efecto Zara no es solo saber matemáticas, es tener el <strong className="text-crisis-green">valor gerencial</strong> de decir <strong className="text-crisis-red">¡PAREN TODO!</strong> a tiempo. Ese dinero ahora puede usarse para comprar materiales color pastel.
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

export default Punto3Debrief;
