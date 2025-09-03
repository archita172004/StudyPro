import React from "react";
import FeatureCard from "./FeatureCard";
import { PiClockCountdownLight } from "react-icons/pi";
import { MdOutlineNoteAlt } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
const Features = () => {
  const features = [
    {
      icon: <PiClockCountdownLight />,
      heading: "Pomodoro & Streaks",
      content:
        "Stay productive with a built-in Pomodoro timer for focused study sessions while keeping daily streaks to maintain momentum.",
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      icon: <MdOutlineNoteAlt />,
      heading: "Note-Taking",
      content:
        "Take quick, organized notes during study sessions and keep them synced with your subjects.",
      iconBgColor: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      icon: <BsGlobe2 />,
      heading: "Subject Management",
      content:
        "Easily add, edit, and organize subjects so your planner works exactly how you study.",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      icon: <LuLayoutDashboard />,
      heading: "Smart Dashboard",
      content:
        "Get a visually appealing dashboard showing your study hours, subject progress, and upcoming tasks at a glance.",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <div className="my-30 p-5 font-sans">
      <h3 className="text-xl text-gray-500 flex flex-row justify-center items-center font-semibold ">
        Features
      </h3>
      <div className="text-5xl text-gray-800 font-bold flex flex-row justify-center items-center m-2 p-3">
        Why choose StudyPro ?
      </div>
      <div className="mx-25 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              heading={feature.heading}
              content={feature.content}
              iconbg={feature.iconBgColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
