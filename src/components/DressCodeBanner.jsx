import React from "react";
import { motion } from "framer-motion";
import dressCodeImg from "../assets/dresscode1.png";

export default function DressCodeBanner() {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[16/7] overflow-hidden">
      <img
        src={dressCodeImg}
        alt="Dress Code"
        className="w-full max-w-full h-full object-contain rounded-lg"
        draggable={false}
      />
      <motion.span
        className="absolute left-4 sm:left-8 md:left-12 top-4 sm:top-8 md:top-16 text-white font-bold text-base sm:text-xl md:text-3xl drop-shadow-lg"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
      >
        BE PRESENTABLE
      </motion.span>
      <motion.span
        className="absolute right-2 sm:right-4 md:right-12 bottom-4 sm:bottom-8 md:bottom-16 text-white font-bold text-base sm:text-xl md:text-3xl drop-shadow-lg"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
      >
        FOLLOW DRESS CODE
      </motion.span>
    </div>
  );
}
