import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { FaLaravel, FaPhp } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";




import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Card = ({ icons, colors, titulo, titulo2, descripcion, ocultar, ocultarcodigo, codigo, pagina }) => {


  const iconArray = Array.isArray(icons) ? icons : [];
  const colorArray = Array.isArray(colors) ? colors : [];
  return (
    <div className="bg-white p-4 border shadow-sm rounded-lg mx-auto max-w-[300px] mt-10">
      <div className="shadow-xl"></div>
      <div className="mt-4 flex flex-col gap-2">
        <a className="h-15 text-2xl font-semibold hover:underline">
          {titulo}
        </a>
        <a className="h-15 text-2xl text-red-700 font-semibold hover:underline">
          {titulo2}
        </a>
        <a className='text-blue-600 hidden'></a>
        <p className="text-gray-600 font-normal h-60">{descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <span>
                <footer className="text-sm my-2 flex flex-col">
                  <h1 className="mb-2">Tecnologias:</h1>
                  <div className="flex">
                    {iconArray.map((Icon, index) => (
                      <Icon key={index} className={`text-${colorArray[index]} mr-2 lg:text-[35px] text-[35px]`} />
                    ))}
                  </div>
                </footer>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 gap-4 place-content-between'>
        <div className='flex justify-start'>
          <a href={codigo} target="_blank">
            <button className={`bg-gray-700 text-white py-2 px-3 font-semibold hover:bg-gray-800 rounded-lg mt-4 ${ocultarcodigo} `}>
              Ver Código
            </button>
          </a>
        </div>
        <div className="flex justify-end">
          <a href={pagina} target="_blank">
            <button className={`bg-gray-700 text-white py-2 px-3 font-semibold hover:bg-gray-800 rounded-lg mt-4 ${ocultar}`}>
              Ver Página
            </button>
          </a>
        </div>
      </div>
    </div>

  );
};



const Carousel = () => {
  return (


    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      loop={true}
      navigation={true}
      pagination={false}
      coverflowEffect={{
        rotate: 10,
        stretch: 20,
        modifier: 1,
        depthModifier: 50,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      initialSlide={2} 
      className="max-w-[350px] lg:max-w-[80%]"
    >
      <SwiperSlide>
        {/* Inventario */}
        <Card
          icons={[FaLaravel, FaReact, FaPhp, SiTailwindcss]}
          colors={['red-500', 'sky-600', 'blue-600', 'sky-600']}
          titulo="Plataforma Web de Inventario"
          descripcion="Una herramienta digital diseñada para optimizar la gestión empresarial. Esta plataforma refleja mi compromiso con la innovación y la eficiencia en el ámbito de la organización de recursos."
          codigo='https://github.com/juanlion/inventario-proyecto'
          ocultar="hidden"
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* ToDo */}
        <Card
          icons={[FaReact, FaPhp]}
          colors={['sky-600', 'blue-600']}
          titulo="Gestor de tareas (Todo List)"
          descripcion="En este proyecto, desarrollé un robusto Gestor de Tareas Personalizado diseñado para potenciar la productividad y facilitar la organización diaria. La aplicación permite a los usuarios crear, editar y gestionar sus tareas de manera eficiente, ofreciendo una experiencia intuitiva y amigable."
          autor="Juan León"
          codigo="https://github.com/JuanSntn/ToDo_List"
          pagina="https://juansntn.github.io/ToDo_List/"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          icons={[FaLaravel, FaPhp, FaBootstrap, IoLogoJavascript, SiMysql]}
          colors={['red-500', 'blue-600', 'purple-700', 'yellow-400', 'blue-700']}
          titulo2= "Desarrollador Full-Stack en Simple Logistic"
          descripcion="Desarrollador full-stack responsable del desarrollo y mantenimiento de un sistema de planificación de recursos empresariales (ERP). Este sistema optimiza varios procesos empresariales, incluyendo la gestión de datos, la generación de cotizaciones, la carga de facturas, la generación de informes y los estados de cuenta."
          pagina="https://simple-logistics.com/"
          ocultarcodigo="hidden"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          icons={[FaLaravel, FaPhp, SiTailwindcss]}
          colors={['red-500', 'blue-600', 'blue-600', 'sky-600']}
          titulo="Proyecto de Sistema de Tickets"
          descripcion="Implementación de un sistema de tickets diseñado para la gestión eficiente de solicitudes y problemas. Permite a los usuarios registrar nuevas solicitudes, asignar prioridades y categorías, y proporciona a los administradores un tablero de control para gestionar y actualizar tickets en tiempo real."
          codigo='https://github.com/juanlion/inventario-proyecto'
          ocultar="hidden"
        />
      </SwiperSlide>
    </Swiper>




  )
}

export default Carousel;