import React from "react";

const Navbar = () => {
  return (
    <div className="fixed flex w-350 top-10 h-12 items-center justify-between mx-15 z-50">
      
      {/* Home */}
      <a href="#Home">
      <div className="py-2 px-7 backdrop-blur-sm bg-white/10 border border-[gray] rounded-4xl flex items-center justify-center gap-2 
      transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM13 19H18V9.15745L12 3.7029L6 9.15745V19H11V13H13V19Z"></path>
        </svg>
        <div>Home</div>
      </div>
      </a>

      {/* Nav Links */}
      <ul className="flex gap-9 px-7 py-4 backdrop-blur-sm bg-white/10 border border-[gray] rounded-4xl 
      transition-all duration-300 hover:bg-white/20">
        <li className="transition-all duration-300 hover:scale-110 cursor-pointer"><a href="#About">About</a></li>
        <li className="transition-all duration-300 hover:scale-110 cursor-pointer"><a href="#TechStack">Tech Stack</a></li>
        <li className="transition-all duration-300 hover:scale-110 cursor-pointer"><a href="#Projects">Projects</a></li>
        <li className="transition-all duration-300 hover:scale-110 cursor-pointer"><a href="#Contact">Contact</a></li>
      </ul>

      {/* Resume */}
      <div className="py-2 px-7 backdrop-blur-sm bg-white/10 border border-[gray] rounded-4xl flex items-center justify-center gap-2 
      transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer" onClick={() => window.open("/Resume.docx", "_blank")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8"
        >
          <path d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5ZM7.52746 17C7.77619 14.75 9.68372 13 12 13C14.3163 13 16.2238 14.75 16.4725 17H7.52746Z"></path>
        </svg>
        <div>Resume</div>
      </div>

    </div>
  );
};

export default Navbar;