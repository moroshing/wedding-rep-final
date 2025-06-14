import React from "react";

const TimerGrid = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => (
  <div className="timer-grid mt-6 grid grid-cols-4 gap-2 sm:gap-4 lg:gap-6 w-full max-w-xs sm:max-w-md">
    {[
      { value: timerDays, label: "Days" },
      { value: timerHours, label: "Hours" },
      { value: timerMinutes, label: "Minutes" },
      { value: timerSeconds, label: "Seconds" },
    ].map(({ value, label }, index) => (
      <div
        key={index}
        className="relative group rounded-2xl p-3 sm:p-4 text-center flex flex-col items-center justify-center overflow-hidden shadow-lg"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_20px_#ffffff10] transition-all group-hover:shadow-[0_0_30px_#ffffff30]"></div>

        {/* Timer content */}
        <div className="relative text-white z-10">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 ease-out">
            {value}
          </div>
          <div
            className="text-xs sm:text-sm mt-1 tracking-wide"
            style={{ fontFamily: '"EB Garamond", serif' }}
          >
            {label}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TimerGrid;
