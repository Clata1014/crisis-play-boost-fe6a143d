import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Punto3Briefing from "./Punto3Briefing";
import Punto3Control from "./Punto3Control";
import Punto3Debrief from "./Punto3Debrief";

interface Punto3Props {
  onBack: () => void;
}

type P3Phase = "briefing" | "control" | "debrief";

const Punto3 = ({ onBack }: Punto3Props) => {
  const [phase, setPhase] = useState<P3Phase>("briefing");

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {phase === "briefing" && (
          <motion.div key="p3-briefing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto3Briefing onProceed={() => setPhase("control")} onBack={onBack} />
          </motion.div>
        )}
        {phase === "control" && (
          <motion.div key="p3-control" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto3Control onSuccess={() => setPhase("debrief")} onBack={onBack} />
          </motion.div>
        )}
        {phase === "debrief" && (
          <motion.div key="p3-debrief" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto3Debrief onRetry={() => setPhase("control")} onBack={onBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Punto3;
