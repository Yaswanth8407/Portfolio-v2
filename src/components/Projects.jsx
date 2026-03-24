import React from "react";
import Coffee from "../assets/Projects/Coffee.png";
import Hall_of_Magical_innovations from "../assets/Projects/Hall_of_Magical_innovations.png";

const Projects = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center border-b-2 border-[gray] gap-7">
      <div className="card border border-[gray] h-100 w-sm rounded-lg overflow-hidden flex flex-col backdrop-blur-sm bg-white/10">
        <img src={Coffee} alt="" className="w-sm" />

        <div className="wrap m-3 ">
          <div className="wrap flex items-center justify-between">
            <div className="Name text-xl">Brew and Beans</div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10">
                Code
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                  </svg>
                </div>
              </button>

              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10">
                Live
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="Summary opacity-65 text-sm m-1 mt-5">
            A frontend coffee ordering website where users can browse menu
            items, manage carts, and place orders easily.
          </div>
          <div className="Tech-Wrap">
            <div className="TechStack flex gap-2 mt-2">
              <span className="border-2 border-[gray] rounded-full gap-1 px-2 py-1 backdrop-blur-sm bg-white/10">
                HTML
              </span>
              <span className="border-2 border-[gray] rounded-full gap-1 px-2 py-1 backdrop-blur-sm bg-white/10">
                CSS
              </span>
              <span className="border-2 border-[gray] rounded-full gap-1 px-2 py-1 backdrop-blur-sm bg-white/10">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="card border border-[gray] h-100 w-sm rounded-lg overflow-hidden flex flex-col backdrop-blur-sm bg-white/10">
        <img src={Hall_of_Magical_innovations} alt="" className="w-sm" />

        <div className="wrap m-3 ">
          <div className="wrap flex items-center justify-between">
            <div className="Name text-xl">Hall of Magical Innovations</div>
            <div className="flex gap-2">
              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10">
                Code
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path>
                  </svg>
                </div>
              </button>

              <button className="px-2 py-1 border-2 border-[gray] rounded-full flex gap-1 backdrop-blur-sm bg-white/10">
                Live
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="Summary opacity-65 text-sm m-1 mt-5">
Harry Potter themed platform where developers share projects and collaborate by sending requests.
          </div>
          <div className="Tech-Wrap">
            <div className="TechStack flex gap-2 mt-2">
              <span className="border-2 border-[gray] rounded-full gap-1 px-2 py-1 backdrop-blur-sm bg-white/10">
                HTML
              </span>
              <span className="border-2 border-[gray] rounded-full gap-1 px-2 py-1 backdrop-blur-sm bg-white/10">
                CSS
              </span>
              <span className="border-2 border-[gray] rounded-full gap-1 px-2 py-1 backdrop-blur-sm bg-white/10">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
