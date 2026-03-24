import React from "react";

const Certificates = (props) => {
  return (
    <div className="border border-[gray] w-70 p-5 rounded-lg flex flex-col gap-3 backdrop-blur-sm bg-white/10
    transition-all duration-300 hover:scale-105 hover:bg-white/20">
      
      {/* Certificate Image */}
      <img
        src={props.Certificate}
        alt=""
        className="w-60 transition-all duration-300 hover:scale-105"
      />

      <div>
        <div className="transition-all duration-300 hover:translate-x-1">
          {props.Title}
        </div>

        <div className="Course text-xs opacity-65 mt-2 transition-all duration-300">
          {props.CompletionDate}
        </div>
      </div>
    </div>
  );
};

export default Certificates;