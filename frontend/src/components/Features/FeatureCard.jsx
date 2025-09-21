import React from "react";

const FeatureCard = ({
  icon,
  heading,
  content,
  iconbg = "bg-gray-400",
  iconColor,
}) => {
  return (
    <div className="bg-gray-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center max-w-sm mx-auto">
      <div
        className={`${iconbg}  w-20 h-20 shadow-sm   rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <div className={`${iconColor} text-3xl my-1`}> {icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{heading}</h3>
      <p className="text-gray-600 leading-relaxed text-sm py-3">{content}</p>
    </div>
  );
};

export default FeatureCard;
