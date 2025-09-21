import React from "react";
import { Navbar } from "./Navbar";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/bg1.jpg')]">
        {/* Optional overlay for better text readability */}
        <div className="absolute bg-black opacity-50 inset-0"></div>
      </div>

      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Plan Smart. Achieve
            <br />
            More.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Organize your studies, stay on track, and reach your academic goals
            with ease.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-blue-500 font-semibold py-4 px-8 rounded-lg border border-white border-opacity-50 backdrop-blur-sm transition-all duration-300 hover:scale-105 min-w-[200px]">
              Explore Planner Features
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px] shadow-lg">
              Start Planning Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
