import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { FaLaravel } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Card = ({ icons, colors, titulo, descripcion, pagina }) => {

  const iconArray = Array.isArray(icons) ? icons : [];
  const colorArray = Array.isArray(colors) ? colors : [];

  return (
    <div className="bg-white p-4 border rounded-lg mx-auto max-w-[300px] mt-10">
      <div className="shadow-xl">
        <img
          src="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f"
          className="w-full h-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <a href="#" className="text-2xl font-semibold hover:underline">
          {titulo}
        </a>
        <p className="text-gray-600">{descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <span>
                <a href={pagina} target="_blank" class="">
                  <button class="bg-gray-700 text-white py-2 px-3 font-semibold hover:bg-gray-800 rounded-lg mt-4">Ver código</button>
                </a>
              </span>
            </div>
          </div>
          <div>
            <footer className="text-sm text-gray-500 mt-4  flex">
              {iconArray.map((Icon, index) => (
                <Icon key={index} className={`text-${colorArray[index]} mr-2`} size={45} />
              ))}
            </footer>
          </div>
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
          rotate: 50,
          stretch: 20,
          depth: 250,
          modifier: 1,
          depthModifier: 50,
          slideShadows: false,

        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="max-w-[350px] lg:max-w-[80%]"
      >
        <SwiperSlide>
          <Card
            icons={[FaLaravel, FaReact]}
            colors={['red-500', 'blue-500']}
            titulo="Plataforma Web de Inventario"
            descripcion="Una herramienta digital diseñada para optimizar la gestión empresarial. Esta plataforma refleja mi compromiso con la innovación y la eficiencia en el ámbito de la organización de recursos."
            autor="Juan León"
            pagina='https://github.com/juanlion/inventario-proyecto'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    

  )
}

export default Carousel;