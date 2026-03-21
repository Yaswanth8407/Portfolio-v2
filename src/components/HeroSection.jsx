import React from 'react'
import Mypic from '../assets/image.png'

const HeroSection = () => {
  return (
    <div className="w-100vw h-100vh flex flex-col">
        <div className="MyPicAndName flex gap-4 ">
            <img src={Mypic} alt="" className="h-20 rounded-full"/>
            <div className="NameAndLoc">
            <div className="name">Yaswanth Mattaparthi.</div>
            <div className="loc">Based in Mumbai, India</div>
            </div>
        </div>
        <div className="Role">FullStack Developer</div>
    </div>
  )
}

export default HeroSection