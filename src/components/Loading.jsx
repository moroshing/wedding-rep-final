import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => (
  <div
    className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
    style={{
      backgroundColor: "black",
      fontFamily: '"EB Garamond", serif',
    }}
    role="img"
    aria-label="Wedding invitation background"
  >
    <div
      className="absolute inset-0 bg-black opacity-40 z-0"
      aria-hidden="true"
    />
    <div className="relative flex flex-col items-center">
      <div className="loader rounded-full border-t-4 border-white border-opacity-50 w-16 h-16 mb-4"></div>
      <p className="text-sm font-bold mb-2">Cupid's working on it...</p>
      <motion.p
        className="text-sm text-gray-300 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        "Every love story is beautiful, but ours is my favorite."
      </motion.p>
    </div>
  </div>
);

export default LoadingScreen;
