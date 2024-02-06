import React from 'react';

const About = () => {
  return (
    <div id="About" className="min-h-screen flex flex-col justify-center p-4 bg-white">
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
          <img src="./img/img1.svg" alt="Mi Icono" className="w-full md:w-auto h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
