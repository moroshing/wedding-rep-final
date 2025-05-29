import React from "react";

const TimerGrid = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => (
  <div className="timer-grid mt-6 grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-md">
    {/* Days */}
    <div className="relative rounded-lg p-2 sm:p-4 text-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative text-white">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {timerDays}
        </div>
        <div className="text-xs sm:text-sm">Days</div>
      </div>
    </div>
    {/* Hours */}
    <div className="relative rounded-lg p-2 sm:p-4 text-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative text-white">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {timerHours}
        </div>
        <div className="text-xs sm:text-sm">Hours</div>
      </div>
    </div>
    {/* Minutes */}
    <div className="relative rounded-lg p-2 sm:p-4 text-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative text-white">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {timerMinutes}
        </div>
        <div className="text-xs sm:text-sm">Minutes</div>
      </div>
    </div>
    {/* Seconds */}
    <div className="relative rounded-lg p-2 sm:p-4 text-center flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="relative text-white">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          {timerSeconds}
        </div>
        <div className="text-xs sm:text-sm">Seconds</div>
      </div>
    </div>
  </div>
);

export default TimerGrid;
