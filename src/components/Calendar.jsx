import React from "react";
import { motion } from "motion/react";

const WeddingCalendar = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2, delay: 0.1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.97 }}
    className="rounded-md w-full md:w-1/2 flex flex-col h-[400px] overflow-hidden"
  >
    <div className="p-5 relative h-full">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-2xl font-bold">June 2025</div>
      <div className="relative grid grid-cols-7 gap-2 mt-4 text-sm">
        {/* Weekdays */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}

        {/* Days of the Month */}
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1;
          const isHighlighted = day === 27; // Highlight June 27
          return (
            <div
              key={day}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                isHighlighted ? "bg-white text-black font-bold" : "text-white"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
      <p className="relative mt-4">Mark your calendars for June 27, 2025!</p>
    </div>
  </motion.div>
);

export default WeddingCalendar;
