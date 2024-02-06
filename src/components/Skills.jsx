import React from 'react'
import { FaLaravel } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";







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
            <FaReact className="text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></FaReact>
            <h2 className="mt-3 font-extrabold text-white">React</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaLaravel className="text-red-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></FaLaravel>
            <h2 className="mt-3 font-extrabold text-white">Laravel</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <IoLogoJavascript className="text-yellow-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></IoLogoJavascript>
            <h2 className="mt-3 font-extrabold text-white">JavaScript</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <BiLogoPhp className="text-blue-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></BiLogoPhp>
            <h2 className="mt-3 font-extrabold text-white">PHP</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaHtml5 className="text-orange-600 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></FaHtml5>
            <h2 className="mt-3 font-extrabold text-white">HTML</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <SiTailwindcss className="text-sky-500 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></SiTailwindcss>
            <h2 className="mt-3 font-extrabold text-white">Tailwind CSS</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <FaGithub className="text-gray-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></FaGithub>
            <h2 className="mt-3 font-extrabold text-white">GitHub</h2>
          </div>
          <div className="p-4 rounded-md flex flex-col items-center justify-center text-center">
            <SiMysql className="text-blue-700 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-125" size={100}></SiMysql>
            <h2 className="mt-3 font-extrabold text-white">MySQL</h2>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Skills;