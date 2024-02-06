import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <div id='Home' className="w-full h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <h1 className="mb-4 text-3xl sm:text-5xl font-extrabold leading-none tracking-tight text-white md:text-6xl lg:text-7xl dark:text-white text-center">
        <span className=" text-red-800">¡Hola!</span> Soy Juan Carlos
      </h1>
      <h2 className="text-base sm:text-3xl font-extrabold pt-4 text-white text-center">
        <TypeAnimation
          sequence={[
            'Developer',
            2000,
            'Coder',
            2000,
            'Logíco',
            2000,
            'Creativo',
            2000,
            'Apasionado',
            2000,
            'Organizado',
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', paddingLeft: '5px' }}
          repeat={Infinity}
        />
      </h2>
      <div className="pt-5">
        <a
          href="https://drive.google.com/drive/folders/1aEGpYBKLzQunpTO4uVz2zCPOTd-HA-iZ?usp=sharing"
          target="_blank"
          className="inline-flex justify-center shadow-inner items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-800 hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
        >
          Ver Curriculum
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
      <div className="flex justify-center sm:justify-between pt-6 max-w-[170px] sm:p-8 w-full">
      <a href="https://github.com/JuanSntn" target="_blank" rel="noopener noreferrer">
  <FaGithub className="cursor-pointer text-gray-600 hover:text-gray-400 mr-4" size={50} />
</a>

<a href="https://www.linkedin.com/in/juan-carlos-leon-heredia-b197b3247/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin className="cursor-pointer text-blue-700 hover:text-blue-500" size={50} />
</a>

      </div>

    </div>



  )
}

export default Home