import React from "react";

const Certificates = (props) => {
  return (
    <div className="border border-[gray] w-70 p-5 rounded-lg flex flex-col gap-3 backdrop-blur-sm bg-white/10">
      <img src={props.Certificate} alt="" className="w-60" />
      <div>
        <div>{props.Title}</div>
        <div className="Course text-xs opacity-65 mt-2">
          {props.CompletionDate}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
