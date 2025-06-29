import React from 'react';
import icon from '../assets/icon.svg';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className="flex  py-0 justify-between items-center">
      <div className="flex items-start gap-[10px] py-[10px] px-0">
        <img src={icon} alt="" className="w-9 h-9" width={36} height={36} />
        <h1 className="text-3xl font-bold">Positivus</h1>
      </div>
      <div className="flex items-center gap-[40px] justify-center text-[20px] font-normal leading-[28px]">
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          About us
        </a>
        <a
          href="#"
          className="hover:bg-neon transition-colors ease-in-out duration-300"
        >
          Services
        </a>
        <a
          href="#"
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

        {/* <div className="flex py-[20px] px-[35px] items-start gap-[10px] rounded-[14px] border border-black-100">
          <p className="text-center ">Request a quote</p>
        </div> */}
        <Button buttonType={'light'} buttonText={'Request a quote'}></Button>
      </div>
    </nav>
  );
};

export default Navbar;
