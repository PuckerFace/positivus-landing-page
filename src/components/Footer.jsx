import React from 'react';
import icon from '../assets/iconWhite.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import Button from './Button';

const Footer = () => {
  return (
    <div className="p-[60px] rounded-t-[45px] bg-black-100 text-white-100 flex flex-col gap-[40px] ">
      <div className="flex items-center justify-between ">
        {' '}
        <div className="flex items-center gap-[10px] ">
          <img src={icon} alt="" className="w-6 h-6" width={36} height={36} />
          <h1 className="text-2xl font-bold">Positivus</h1>
        </div>
        <div className="text-[18px] underline decoration-1 decoration-white-100 flex gap-[20px] ">
          <a href="#">About us</a>
          <a href="#services">Services</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex gap-[20px]">
          <img src={linkedin} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
      <div className="flex justify-between gap-[40px]">
        <div className="flex flex-col w-[400px] gap-6">
          <p className="text-[20px] w-fit px-2 font-medium text-black-100 rounded bg-neon ">
            Contact us:
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[18px] ">Email: info@positivus.com</p>
            <p className="text-[18px] ">Phone: 555-567-8901 </p>
            <p className="text-[18px] ">
              Address: 1234 Main St Moonstone City, Stardust State 12345{' '}
            </p>
          </div>
        </div>
        <div className="flex p-[20px] justify-center items-center gap-5 w-1/2 bg-[#292A32] rounded-[14px] ">
          <div className="w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="text-white w-full border border-white-100 rounded-[14px] p-[18px] text-[18px] font-normal leading-normal bg-transparent"
            />
          </div>
          <div className="w-full">
            <Button buttonType={'neon'} buttonText={'Subscribe to news'} />
          </div>
        </div>
      </div>
      <div className="  border-t border-white-100 pt-[20px] ">
        <div className="flex gap-[20px] mt-[20px] items-center">
          <p className="text-[18px] font-normal leading-normal">
            © 2023 Positivus. All rights reserved.
          </p>
          <p className="text-[18px] underline decoration-1 decoration-white-100 font-normal leading-normal">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
