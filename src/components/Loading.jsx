import React from "react";

const LoadingScreen = ({ bgImage }) => (
  <div
    className="relative bg-cover bg-center h-screen text-white flex items-center justify-center"
    style={{
      backgroundImage: `url(${bgImage})`,
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
      <p className="text-sm font-bold">Cupid’s working on it. . .</p>
    </div>
  </div>
);

export default LoadingScreen;
