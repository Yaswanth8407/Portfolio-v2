import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-center ">
            <ul className="flex gap-9 w-fit px-7 py-4 justify-center mt-10 bg-transparent rounded-4xl border-2 border-[gray] border-solid text-amber-50 fixed">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
  )
}

export default Navbar