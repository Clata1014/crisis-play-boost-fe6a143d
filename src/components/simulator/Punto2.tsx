import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Punto2Briefing from "./Punto2Briefing";
import Punto2Control from "./Punto2Control";
import Punto2Debrief from "./Punto2Debrief";

interface Punto2Props {
  onBack: () => void;
  onNextLevel?: () => void;
}

type P2Phase = "briefing" | "control" | "debrief";

const Punto2 = ({ onBack, onNextLevel }: Punto2Props) => {
  const [phase, setPhase] = useState<P2Phase>("briefing");
  const [correct, setCorrect] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    setCorrect(isCorrect);
    setPhase("debrief");
  };

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {phase === "briefing" && (
          <motion.div key="p2-briefing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto2Briefing onProceed={() => setPhase("control")} onBack={onBack} />
          </motion.div>
        )}
        {phase === "control" && (
          <motion.div key="p2-control" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto2Control onAnswer={handleAnswer} onBack={onBack} />
          </motion.div>
        )}
        {phase === "debrief" && (
          <motion.div key="p2-debrief" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto2Debrief correct={correct} onRetry={() => setPhase("briefing")} onBack={onBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Punto2;
