import React from "react";

const Education = (props) => {
  return (
    <div className="flex gap-3 ">
      <div className="img size-12 rounded-full z-2 border-2 border-[gray] flex items-center justify-center object-contain ">
        <img src={props.Logo} alt="" className="rounded-full" />
      </div>
      <div className="info flex flex-col">
        <div className="Date text-xs opacity-65">
          {props.StartDate} - {props.EndDate}
        </div>
        <div className="ClgName font-bold text-md">{props.ClgName}</div>
        <div className="Course text-xs opacity-65">{props.Course}</div>
      </div>
    </div>
  );
};

export default Education;
