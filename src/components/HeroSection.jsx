import React from 'react'
import Mypic from '../assets/image.png'
import Bg_img from '../assets/Bg-img.jpg'

const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-{Bg_img}">
        <div className="MyPicAndName flex gap-4 ">
            <img src={Mypic} alt="" className="h-20 rounded-full"/>
            <div className="NameAndLoc">
            <div className="name font-bold text-2xl">Yaswanth Mattaparthi.</div>
            <div className="loc text-xs">Based in Mumbai, India</div>
            </div>
        </div>
        <div className="Role1stHalf text-8xl font-bold ml-13">FULLSTACK</div>
        <div className="Role2ndHalf text-8xl font-bold flex items-center gap-2"> DEVELOPER <button className="text-xl border-2 border-[gray] px-4 py-1 rounded-4xl">Resume</button></div>
    </div>
  )
}
export default HeroSection