import React, { useState } from 'react';
import icon from '../assets/Icon.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Button from './Button';
import '../styles/Navbar.css';
import { Fade } from 'react-awesome-reveal';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="flex   justify-between items-center">
      <div className="flex items-start gap-[10px] py-[10px] px-0">
        <img src={icon} alt="" className="w-9 h-9" width={36} height={36} />
        <h1 className="text-3xl font-bold">Positivus</h1>
      </div>
      {/* mobile */}
      <div className="block xl:hidden ">
        <img
          src={menu}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 cursor-pointer"
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full shadow-2xl bg-white z-50 text-black-100 flex flex-col p-6    gap-[40px] w-[80%] max-w-[400px] 
    transform transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  `}
      >
        <img
          src={close}
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-10 h-10 cursor-pointer self-end mt-4 mr-6"
          alt="close"
        />
        <hr className="border-neon border-2 w-full" />
        <a
          href="#"
          className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
        >
          <span className="relative z-10">About us</span>
        </a>
        <a
          href="#services"
          className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
        >
          <span className="relative z-10">Services</span>
        </a>
        <a
          href="#use-cases"
          className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
        >
          <span className="relative z-10">Use Cases</span>
        </a>
        <a
          href="#"
          className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
        >
          <span className="relative z-10">Pricing</span>
        </a>
        <a
          href="#"
          className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
        >
          <span className="relative z-10"> Blog</span>
        </a>{' '}
        <Button
          buttonType={'light'}
          buttonText={'Request a quote'}
          link={'#contact'}
        />
      </div>

      {/* desktop */}

      <div className="hidden xl:flex   cursor-pointer   items-center gap-5 xl:gap-[40px] justify-center text-[20px]  font-normal leading-[28px]">
        <Fade cascade damping={0.1} triggerOnce>
          <a
            href="#"
            className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
          >
            <span className="relative z-10">About us</span>
          </a>
          <a
            href="#services"
            className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
          >
            <span className="relative z-10">Services</span>
          </a>
          <a
            href="#use-cases"
            className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
          >
            <span className="relative z-10">Use Cases</span>
          </a>
          <a
            href="#"
            className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
          >
            <span className="relative z-10">Pricing</span>
          </a>
          <a
            href="#"
            className="relative overflow-hidden z-0  link transition-colors ease-in-out duration-300"
          >
            <span className="relative z-10"> Blog</span>
          </a>{' '}
          <Button
            buttonType={'light'}
            buttonText={'Request a quote'}
            link={'#contact'}
          ></Button>
        </Fade>
      </div>
    </nav>
  );
};

export default Navbar;
