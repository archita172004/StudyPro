import React from "react";

const Ready = () => {
  return (
    <div className="bg-[oklch(0.41_0.07_232.72)] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h4 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Ready to Share your knowledge
        </h4>
        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
          Join thousands of successful instructors on StudyPro and turn your
          passion into profit. We provide the tools and support you need to
          create engaging courses in any subject, from marketing to design and
          programming
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 min-w-[200px] shadow-lg">
            Start creating today !
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ready;
