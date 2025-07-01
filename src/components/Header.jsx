import React from 'react';
import Button from './Button';
import megaphone from '../assets/megaphone.png';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  py-0  lg:justify-between lg:items-start justify-center items-center">
      <div className="flex flex-col justify-center  w-full 2xl:gap-[20px]   lg:items-start gap-[15px] ">
        <Fade cascade damping={0.15} duration={2000} triggerOnce>
          <div className="w-full text-[40px] lg:text-[50px] 2xl:text-[65px] font-medium leading-normal text-black">
            Navigating the digital landscape for success
          </div>
          <div className="lg:w-full w-[300px]  lg:hidden flex justify-center">
            <img
              src={megaphone}
              alt=""
              className="w-full h-full object-contain  animate-float "
            />
          </div>
          <div className="text-[20px] mb-2 font-normal leading-[28px] w-full md:w-[498px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </div>

          <Button
            buttonType={'dark'}
            buttonText={'Book a consultation'}
            width={'w-full'}
          />
        </Fade>
      </div>
      <div className="w-full hidden lg:block">
        <Fade cascade damping={0.4} triggerOnce>
          <img
            src={megaphone}
            alt=""
            className="w-full h-full min-h-[450px] object-contain max-h-[600px] animate-float "
          />
        </Fade>
      </div>
    </div>
  );
};

export default Header;
