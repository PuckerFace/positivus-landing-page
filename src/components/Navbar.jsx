import React, { useState } from 'react';
import icon from '../assets/icon.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="flex   justify-between items-center">
      <div className="flex items-start gap-[10px] py-[10px] px-0">
        <img src={icon} alt="" className="w-9 h-9" width={36} height={36} />
        <h1 className="text-3xl font-bold">Positivus</h1>
      </div>
      <div className="block lg:hidden ">
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
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          About us
        </a>
        <a
          href="#services"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Services
        </a>
        <a
          href="#use-cases"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Use Cases
        </a>
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Pricing
        </a>
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Blog
        </a>{' '}
        <Button
          buttonType={'light'}
          buttonText={'Request a quote'}
          link={'#contact'}
        />
      </div>

      <div className="hidden lg:flex  items-center gap-6 xl:gap-[40px] justify-center text-[20px] font-normal leading-[28px]">
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          About us
        </a>
        <a
          href="#services"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Services
        </a>
        <a
          href="#use-cases"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Use Cases
        </a>
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Pricing
        </a>
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Blog
        </a>
        <Button
          buttonType={'light'}
          buttonText={'Request a quote'}
          link={'#contact'}
        ></Button>
      </div>
    </nav>
  );
};

export default Navbar;
