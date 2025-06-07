import React, { useState } from "react";
import { motion } from "framer-motion";

const palette = ["#dde8dd", "#c3d6c3", "#9bb89b", "#3b5e4b", "#00674F"];

export default function ColorPalette() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (color, idx) => {
    navigator.clipboard.writeText(color);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-6">
      {palette.map((color, idx) => (
        <div key={color} className="relative flex flex-col items-center">
          <motion.div
            className="w-14 h-14 md:w-24 md:h-24 rounded-full cursor-pointer flex items-center justify-center"
            style={{ backgroundColor: color }}
            whileHover={{
              scale: 1.12,
              boxShadow: `0 0 0 8px ${color}44`,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setHoveredIdx(idx)}
            onHoverEnd={() => setHoveredIdx(null)}
            onClick={() => handleCopy(color, idx)}
            title="Click to copy"
          >
            {(hoveredIdx === idx || copiedIdx === idx) && (
              <motion.span
                className="text-[#5c522a] font-mono text-xs md:text-base bg-white/80 px-2 py-1 rounded-lg select-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {copiedIdx === idx ? "Copied!" : color}
              </motion.span>
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
