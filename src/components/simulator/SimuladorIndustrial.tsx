import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lobby from "./Lobby";
import Briefing from "./Briefing";
import ControlPanel from "./ControlPanel";
import Debriefing from "./Debriefing";
import Punto2 from "./Punto2";
import Punto3 from "./Punto3";

type Phase = "lobby" | "briefing" | "control" | "debrief" | "punto2" | "punto3";

const SimuladorIndustrial = () => {
  const [phase, setPhase] = useState<Phase>("lobby");
  const [choice, setChoice] = useState<"truck" | "plane">("truck");

  const handleSelect = (c: "truck" | "plane") => {
    setChoice(c);
    setPhase("debrief");
  };

  const handleRetry = () => setPhase("control");
  const handleBackToPunto1 = () => setPhase("debrief");

  return (
    <div className="relative min-h-screen bg-background">
      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(173 80% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(173 80% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <AnimatePresence mode="wait">
        {phase === "lobby" && (
          <motion.div key="lobby" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Lobby onStart={() => setPhase("briefing")} />
          </motion.div>
        )}
        {phase === "briefing" && (
          <motion.div key="briefing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Briefing onProceed={() => setPhase("control")} />
          </motion.div>
        )}
        {phase === "control" && (
          <motion.div key="control" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ControlPanel onSelect={handleSelect} />
          </motion.div>
        )}
        {phase === "debrief" && (
          <motion.div key="debrief" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Debriefing choice={choice} onRetry={handleRetry} onNextLevel={() => setPhase("punto2")} />
          </motion.div>
        )}
        {phase === "punto2" && (
          <motion.div key="punto2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto2 onBack={handleBackToPunto1} onNextLevel={() => setPhase("punto3")} />
          </motion.div>
        )}
        {phase === "punto3" && (
          <motion.div key="punto3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Punto3 onBack={() => setPhase("lobby")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SimuladorIndustrial;
