import React from "react";

const Education = (props) => {
  return (
    <div className="flex gap-3 transition-all duration-300 hover:scale-[1.02]">
      
      {/* Logo */}
      <div className="img size-12 rounded-full z-2 border-2 border-[gray] flex items-center justify-center object-contain
      transition-all duration-300 hover:scale-110 hover:bg-white/10">
        <img
          src={props.Logo}
          alt=""
          className="rounded-full transition-all duration-300"
        />
      </div>

      {/* Info */}
      <div className="info flex flex-col transition-all duration-300">
        <div className="Date text-xs opacity-65 transition-all duration-300">
          {props.StartDate} - {props.EndDate}
        </div>

        <div className="ClgName font-bold text-md transition-all duration-300 hover:translate-x-1">
          {props.ClgName}
        </div>

        <div className="Course text-xs opacity-65 transition-all duration-300">
          {props.Course}
        </div>
      </div>
      
    </div>
  );
};

export default Education;