import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      {/* Carousel wrapper */}
      <div className="relative h-72 overflow-hidden md:h-53">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex
                ? 'duration-700 ease-in-out opacity-100 transition-opacity'
                : 'hidden'
            }`}
            data-carousel-item={index === currentIndex ? 'active' : ''}
          >
            <img
              src={image}
              className="rounded-t-lg absolute  block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover object-bottom"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 start-0  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-800/30 group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaArrowLeft className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 end-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none transform -translate-y-1/2"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-800/30 group-hover:bg-gray-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <FaArrowRight className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
