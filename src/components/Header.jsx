import React from 'react';
import Button from './Button';
import megaphone from '../assets/megaphone.png';

const Header = () => {
  return (
    <div className="flex w-full  py-0  justify-between items-start">
      <div className="flex flex-col items-start gap-[35px] ">
        <div className="w-[531px] text-[60px] font-medium leading-normal text-black">
          Navigating the digital landscape for success
        </div>
        <div className="text-[20px] font-normal leading-[28px] w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </div>
        <Button buttonType={'dark'} buttonText={'Book a consultation'} />
      </div>
      <div>
        <img src={megaphone} alt="" />
      </div>
    </div>
  );
};

export default Header;
