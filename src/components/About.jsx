import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';







const About = () => {
  return (
    <div id="About" className="min-h-screen flex flex-col  justify-center p-4 bg-white">
      <div className="md:w-1/2 md:mb-0 md:mr-4 md:pl-20 flex-shrink-0 text-center mt-16 md:mt-0">
        {/* Ajusté el margen superior a mt-16 */}
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          &lt; Sobre <span className="text-red-800">Mí /&gt;</span>
        </h1>
      </div>
      <div className="m-4 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:mb-0 md:mr-4 md:pl-20 flex-shrink-0 text-center">
          <p className="mb-4 tracking-normal text-left font-semibold text-lg text-gray-900 dark:text-gray-400">
            Soy un apasionado desarrollador web con un enfoque destacado en el desarrollo{" "}
            <strong className="font-semibold text-red-900 underline underline-offset-2">back-end</strong>, donde he cultivado una sólida experiencia trabajando con tecnologías como{" "}
            <strong className="font-semibold text-red-900 underline underline-offset-2">Laravel</strong> y{" "}
            <strong className="font-semibold text-red-900 underline underline-offset-2">PHP</strong>. Mi dedicación se centra en la creación de sistemas robustos, seguros y eficientes que respaldan la funcionalidad de aplicaciones web complejas.
          </p>
          <p className="text-black-500 text-left font-semibold text-lg dark:text-gray-400">
            Si bien mi enfoque principal es el desarrollo{" "}
            <strong className="font-semibold text-red-900 underline underline-offset-2">back-end</strong>, también poseo habilidades sólidas en lenguajes front-end como{" "}
            <strong className="font-semibold text-red-900 underline underline-offset-2">HTML, CSS Y JavaScript</strong>. Esta combinación de habilidades me permite tener una comprensión integral de todo el proceso de desarrollo, desde la creación de la interfaz de usuario hasta la implementación de la lógica empresarial en el back-end.
          </p>
          <p className="text-black-500 text-left font-semibold text-lg dark:text-gray-400">
            Me considero un desarrollador front-end muy responsable y meticuloso. Siempre me esmero por entregar trabajos de alto valor a mis clientes, respetando plazos y presupuestos. Estoy comprometido con la calidad de código y la optimización de la experiencia de usuario.
          </p>
        </div>

        <div className="md:w-1/2 text-left flex items-center justify-center">
          <div className="border mt-4 w-3/4 md:w-3/4 rounded-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-8">
              <img
                src="./img/perfil.jpg"

                alt="juan"
                lazyload="true"
                className="rounded-full w-24 h-24 object-cover ring-4 ring-gray-300"
              />

              <div>

                <h3 className="font-semibold text-xl md:text-2xl text-gray-700">
                  Juan Carlos León
                </h3>
                <p className="text-gray-600">Desarrollador full stack</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-6">
              <p className="text-gray-500 text-center lg:text-left">
                Apasionado por el desarrollo web, me especializo como full-stack developer con un enfoque destacado en el backend. Mi fascinación radica en la creación de sistemas robustos y seguros que respaldan la funcionalidad de aplicaciones web complejas.              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 py-4">
                <a href="https://www.linkedin.com/in/juan-carlos-leon-heredia-b197b3247/" target="_blank" className="p-2 bg-gray-100 rounded-lg">
                  <FaLinkedin className="text-blue-900" size={25} />
                </a>
                <a href="https://github.com/JuanSntn" target="_blank" className="p-2 bg-gray-100 rounded-lg">
                  <FaGithub className="text-gray-600" size={25} />
                </a>
                <a href="https://wa.me/7227981757" target="_blank" className="p-2 bg-gray-100 rounded-lg">
                  <FaWhatsapp className="text-green-500" size={25} />
                </a>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
