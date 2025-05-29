import { motion } from "motion/react";
import { useEffect, useState } from "react";

const TypewriterText = ({ text, delay = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay + Math.random() * 50);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, delay]);

  return (
    <motion.div className="mt-4 inline-flex items-center">
      <motion.p className="text-lg sm:text-xl">
        {displayedText}
        {!isComplete && (
          <motion.span
            className="ml-1 inline-block h-5 w-1 bg-current align-middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.p>
    </motion.div>
  );
};

export default TypewriterText;
