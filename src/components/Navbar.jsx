import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center backdrop-blur-4xl ">
      <ul className="flex gap-9 w-fit px-7 py-4 justify-center mt-10 backdrop-blur-md rounded-4xl border border-[gray] border-solid fixed">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
