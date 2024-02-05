import React from 'react'
import { FaReact } from "react-icons/fa";


const Skills = () => {
  return (
<div id='skills' className="min-h-screen flex items-center justify-center  backdrop-filter-none">
    <div className="p-8 rounded-md w-full md:w-2/3 h-full md:h-2/3 flex flex-col items-center justify-center ">
      <h2 className="text-4xl pb-12 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        &lt; Mis <span className="text-red-700">Skills /&gt;</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-center">
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaReact className="text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" size={100}></FaReact>
            <h2 className="mt-2 font-extrabold text-white">React</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaReact className="text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" size={100}></FaReact>
            <h2 className="mt-2 font-extrabold text-white">React</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaReact className="text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" size={100}></FaReact>
            <h2 className="mt-2 font-extrabold text-white">React</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaReact className="text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110" size={100}></FaReact>
            <h2 className="mt-2 font-extrabold text-white">React</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;