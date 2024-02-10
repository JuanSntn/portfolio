import React from 'react';
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import Carousel from './Carousel';

const Projects = () => {

  return (


    <div id='Projects' className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-screen-lg p-4 md:p-8">
        <h2 className="text-4xl text-center pb-8 font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white mt-16">
          &lt; Proyectos <span className="text-red-700">/&gt;</span>
        </h2>
        <Carousel />
      </div>
    </div>





  );
};

export default Projects;
