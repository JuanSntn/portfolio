import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Nav = () => {
  const Links = [
    { name: 'Inicio', to: 'Home' },
    { name: 'Sobre mí', to: 'About' },
    { name: 'Skills', to: 'Experience' },
    { name: 'Proyectos', to: 'Proyect' },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full bg-black h-20vh backdrop-filter shadow-md'>
      <div className='shadow-md w-full'>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
          <div className='font-bold text-2xl cursor-pointer flex items-center  text-white'>
            <span className='text-3xl text-indigo-600 mr-1 pt-2'>
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            Juan León
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {open ? <FaTimes className='text-white' /> : <FaBars className='text-white' />}
          </div>

          <ul className={`md:flex md:items-center backdrop-blur-sm bg-black bg-opacity-40 md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15' : 'top-[-470px]'}`}>
            {Links.map((link) => (
              <li key={link.name} className={`md:ml-9 text-xl md:my-0 my-8 ${open ? 'hover:border-b border-red-900' : ''}`}>
                <Link spy={true} smooth={true} to={link.to} className='cursor-pointer text-white font-semibold hover:text-red-900 duration-500'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
