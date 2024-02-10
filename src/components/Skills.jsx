import React from 'react'
import { FaLaravel } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const SkillItem = ({ icon, percentage, text, color,hoverColor }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <div className={`p-4 border-2 border-white py-6 rounded-full flex flex-col items-center justify-center text-center hover:border-${hoverColor} duration-500`}>
        {icon({ className: `text-${color} transition ease-in-out delay-100`, size: 50 })}
        <h2 className={`mt-2 font-extrabold text-white `}>{percentage}</h2>
      </div>
      <h2 className={`mt-3 font-extrabold text-${color}`}>{text}</h2>
    </div>
  );
};


const Skills = () => {
  return (
    <div id='skills' className="h-screen flex items-center justify-center backdrop-filter-none">
      <div className="p-8 rounded-md w-full md:w-2/3 h-full flex flex-col items-center justify-center">
        <h2 className="text-3xl pb-7 md:text-4xl lg:text-5xl lg:pb-8 mt-20 font-extrabold leading-none tracking-tight text-white dark:text-white">
          &lt; Mis <span className="text-red-700">Skills /&gt;</span>
        </h2>
        
        <div className="grid mb-11 grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center justify-center">

          {/* React */}
          <SkillItem
            icon={FaReact}
            percentage="60%"
            text="React"
            color="blue-700"
            hoverColor="red-700"
          />

          {/* Laravel */}
          <SkillItem
            icon={FaLaravel}
            percentage="80%"
            text="Laravel"
            color="red-700"
            hoverColor="red-700"
          />

          {/* JavaScript */}
          <SkillItem
            icon={IoLogoJavascript}
            percentage="60%"
            text="JavaScript"
            color="yellow-400"
            hoverColor="red-700"
          />

          {/* PHP */}
          <SkillItem
            icon={BiLogoPhp}
            percentage="80%"
            text="PHP"
            color="blue-800"
            hoverColor="red-700"
          />

          {/* HTML */}
          <SkillItem
            icon={FaHtml5}
            percentage="90%"
            text="HTML"
            color="orange-600"
            hoverColor="red-700"
          />

          {/* Tailwind CSS */}
          <SkillItem
            icon={SiTailwindcss}
            percentage="80%"
            text="Tailwind CSS"
            color="sky-500"
            hoverColor="red-700"
          />

          {/* GitHub */}
          <SkillItem
            icon={FaGithub}
            percentage="70%"
            text="GitHub"
            color="gray-600"
            hoverColor="red-700"
          />

          {/* MySQL */}
          <SkillItem
            icon={SiMysql}
            percentage="80%"
            text="MySQL"
            color="blue-700"
            hoverColor="red-700"
          />

        </div>
      </div>
    </div>
  );
};

export default Skills;