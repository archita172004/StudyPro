import React from "react";
import { FaGraduationCap } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      Footer
      <div className="flex items-center space-x-2">
        <FaGraduationCap className="text-blue-500 text-4xl" />
        <span className="text-2xl font-bold">
          Study<span className="text-blue-500">Pro</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
