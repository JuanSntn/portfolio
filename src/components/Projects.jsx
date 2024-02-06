import React from 'react';
import { FaLaravel, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import Carousel from './Carousel';

const Projects = () => {
  // Array de imágenes para el carrusel del proyecto
  const images1 = [
    './img/aurum/inicio.png',
    './img/aurum/login.png',
    './img/aurum/form inventario.png',
    './img/aurum/tablas.png',
    './img/aurum/alertas.png',
  ];

  return (

    <div id='Projects' className="mx-auto bg-white max-w-screen-lg p-4 md:p-8">
      <h2 class="text-4xl text-center pb-8 font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl dark:text-white mt-16">
        &lt; Proyectos <span class="text-red-700">/&gt;</span>
      </h2>
      <div class="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">

        {/* CARD */}
        <div class="rounded-2xl overflow-hidden transition ease-in-out delay-0 hover:scale-105 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <Carousel images={images1} />
          <div class="px-4 py-4">
            <section>
              <h2 class="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Plataforma Web de Inventario</h2>
              <p class="text-gray-600 mb-4">Una herramienta digital diseñada para optimizar la gestión empresarial. Esta plataforma refleja mi compromiso con la innovación y la eficiencia en el ámbito de la organización de recursos.</p>
            </section>
            <footer class="text-sm text-gray-500 mt-4 mb-4 flex">
              <FaLaravel class="text-red-700  mr-2" size={35}></FaLaravel>
              <FaReact class="text-blue-700 borer mr-2" size={35}></FaReact>
              <SiTailwindcss class="text-sky-400  mr-2" size={35}></SiTailwindcss>
              <SiMysql class="text-black  mr-2" size={35}></SiMysql>
            </footer>
            <a href="https://github.com/juanlion/inventario-proyecto" target="_blank" class="">
              <button class="bg-gray-700 text-white py-2 px-3 font-semibold hover:bg-gray-800 rounded-lg mt-4">Ver código</button>
            </a>
          </div>
        </div>


        {/* CARD */}
        <div class="rounded-2xl overflow-hidden transition ease-in-out delay-0 hover:scale-105 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <Carousel images={images1} />
          <div class="px-4 py-4">
            <section>
              <h2 class="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Plataforma Web de Inventario</h2>
              <p class="text-gray-600 mb-4">Una herramienta digital diseñada para optimizar la gestión empresarial. Esta plataforma refleja mi compromiso con la innovación y la eficiencia en el ámbito de la organización de recursos.</p>
            </section>
            <footer class="text-sm text-gray-500 mt-4 mb-4 flex">
              <FaLaravel class="text-red-700  mr-2" size={35}></FaLaravel>
              <FaReact class="text-blue-700  mr-2" size={35}></FaReact>
              <SiTailwindcss class="text-sky-400  mr-2" size={35}></SiTailwindcss>
              <SiMysql class="text-black  mr-2" size={35}></SiMysql>
            </footer>
            <a href="https://github.com/juanlion/inventario-proyecto" target="_blank" class="">
              <button class="bg-gray-700 text-white py-2 px-3 font-semibold hover:bg-gray-800 rounded-lg mt-4">Ver código</button>
            </a>
          </div>
        </div>

        {/* CARD 3 */}
        <div class="rounded-2xl overflow-hidden transition ease-in-out delay-0 hover:scale-105 bg-white border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <Carousel images={images1} />
          <div class="px-4 py-4">
            <section>
              <h2 class="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Plataforma Web de Inventario</h2>
              <p class="text-gray-600 mb-4">Una herramienta digital diseñada para optimizar la gestión empresarial. Esta plataforma refleja mi compromiso con la innovación y la eficiencia en el ámbito de la organización de recursos.</p>
            </section>
            <footer class="text-sm text-gray-500 mt-4 mb-4 flex">
              <FaLaravel class="text-red-700  mr-2" size={35}></FaLaravel>
              <FaReact class="text-blue-700  mr-2" size={35}></FaReact>
              <SiTailwindcss class="text-sky-400  mr-2" size={35}></SiTailwindcss>
              <SiMysql class="text-black  mr-2" size={35}></SiMysql>
            </footer>
            <a href="https://github.com/juanlion/inventario-proyecto" target="_blank" class="">
              <button class="bg-gray-700 text-white py-2 px-3 font-semibold hover:bg-gray-800 rounded-lg mt-4">Ver código</button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
