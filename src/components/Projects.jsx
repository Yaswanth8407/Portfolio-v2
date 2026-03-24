import React from "react";
import Coffee from "../assets/Projects/Coffee.png";
import Hall_of_Magical_innovations from "../assets/Projects/Hall_of_magical_innovations.png";

const Projects = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center border-b-2 border-[gray] gap-7" id="Projects">

      {/* Card 1 */}
      <div className="card border border-[gray] h-100 w-sm rounded-lg overflow-hidden flex flex-col backdrop-blur-sm bg-white/10
      transition-all duration-300 hover:scale-105 hover:bg-white/20">
        
        <img
          src={Coffee}
          alt=""
          className="w-sm transition-all duration-300 hover:scale-105"
        />

        <div className="wrap m-3 ">
          <div className="wrap flex items-center justify-between">
            <div className="Name text-xl transition-all duration-300 hover:translate-x-1">
              Brew and Beans
            </div>

            <div className="flex gap-2">
              
              {/* Code Button */}
              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer" onClick={()=>{window.location.href="https://github.com/Yaswanth8407/Coffee"}}>
                Code
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                  </svg>
                </div>
              </button>

              {/* Live Button */}
              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer" onClick={()=>{window.location.href="https://coffee-p9dh2wm9s-yaswanth8407s-projects.vercel.app"}}>
                Live
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </button>

            </div>
          </div>

          <div className="Summary opacity-65 text-sm m-1 mt-5 transition-all duration-300">
            A frontend coffee ordering website where users can browse menu
            items, manage carts, and place orders easily.
          </div>

          <div className="Tech-Wrap">
            <div className="TechStack flex gap-2 mt-2">
              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">HTML</span>

              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">CSS</span>

              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">JavaScript</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card border border-[gray] h-100 w-sm rounded-lg overflow-hidden flex flex-col backdrop-blur-sm bg-white/10
      transition-all duration-300 hover:scale-105 hover:bg-white/20">
        
        <img
          src={Hall_of_Magical_innovations}
          alt=""
          className="w-sm transition-all duration-300 hover:scale-105"
        />

        <div className="wrap m-3 ">
          <div className="wrap flex items-center justify-between">
            <div className="Name text-xl transition-all duration-300 hover:translate-x-1">
              Hall of Magical Innovations
            </div>

            <div className="flex gap-2">

              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer" onClick={()=>{
                window.location.href="https://github.com/Yaswanth8407/hall-of-magical-innovations"
              }}>
                Code
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                  </svg>
                </div>
              </button>

              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20 cursor-pointer" onClick={()=>{
                window,location.href="https://yaswanth8407.github.io/hall-of-magical-innovations/"
              }}>
                Live
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </button>

            </div>
          </div>

          <div className="Summary opacity-65 text-sm m-1 mt-5 transition-all duration-300">
            Harry Potter themed platform where developers share projects and collaborate by sending requests.
          </div>

          <div className="Tech-Wrap">
            <div className="TechStack flex gap-2 mt-2">
              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">HTML</span>

              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">CSS</span>

              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">JavaScript</span>

              <span className="border-2 border-[gray] rounded-full px-2 py-1 backdrop-blur-sm bg-white/10
              transition-all duration-300 hover:scale-105 hover:bg-white/20">Firebase</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;