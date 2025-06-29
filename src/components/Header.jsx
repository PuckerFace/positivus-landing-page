import React from 'react';
import Button from './Button';
import megaphone from '../assets/megaphone.png';

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full  py-0  lg:justify-between lg:items-start justify-center items-center">
      <div className="flex flex-col items-center   lg:items-start gap-[35px] ">
        <div className="w-full text-[40px] md:text-[60px] text-center lg:text-left font-medium leading-normal text-black">
          Navigating the digital landscape for success
        </div>
        <div className="lg:w-full w-[300px]  lg:hidden flex justify-center">
          <img src={megaphone} alt="" />
        </div>
        <div className="text-[20px] font-normal leading-[28px] w-full md:w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </div>
        <Button buttonType={'dark'} buttonText={'Book a consultation'} />
      </div>
      <div className="w-full hidden lg:block">
        <img src={megaphone} alt="" />
      </div>
    </div>
  );
};

export default Header;
