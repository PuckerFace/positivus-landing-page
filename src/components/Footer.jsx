import React from 'react';
import icon from '../assets/IconWhite.svg';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import Button from './Button';
import { Fade } from 'react-awesome-reveal';
import '../styles/Form.css';

const Footer = () => {
  return (
    <Fade direction="up" duration={1000} triggerOnce>
      <div className="p-[60px] md:rounded-t-[45px] bg-black-100 text-white-100 flex flex-col gap-[40px] ">
        <div className="flex gap-[30px] justify-center  lg:flex-row flex-col items-center sm:justify-between ">
          {' '}
          <div className="flex items-center gap-[10px] ">
            <img src={icon} alt="" className="w-6 h-6" width={36} height={36} />
            <h1 className="text-2xl font-bold">Positivus</h1>
          </div>
          <div className="text-[18px] sm:underline decoration-1 decoration-white-100 flex gap-[20px] lg:items-start items-center sm:flex-row flex-col ">
            <a href="#">About us</a>
            <a href="#services">Services</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
          </div>
          <div className="md:flex hidden   gap-[20px]">
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="flex xl:flex-row items-center sm:items-start flex-col justify-center w-full lg:justify-between gap-[40px]">
          <div className="flex sm:items-start items-center   flex-col w-[400px] gap-6">
            <p className="text-[20px] w-fit px-2 font-medium text-black-100 rounded bg-neon ">
              Contact us:
            </p>
            <div className="flex sm:items-start items-center sm:text-left text-center flex-col gap-3">
              <p className="text-[18px] ">Email: info@positivus.com</p>
              <p className="text-[18px] ">Phone: 555-567-8901 </p>
              <p className="text-[18px] ">
                Address: 1234 Main St Moonstone City, Stardust State 12345{' '}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row p-[10px] xs:p-[40px] justify-center items-center gap-5 h-full w-full md:w-3/4  bg-[#292A32] rounded-[14px] shadow-[0px_5px_0px_#191A23] ">
            <div className="w-full relative border-[1.5px] border-white-100  rounded-[14px] z-1">
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="text-white w-full border-0 p-[18px] text-[18px] font-normal  leading-normal outline-0 bg-transparent "
              />
              <span className="dark rounded-[14px]"></span>
            </div>
            <div className="w-full ">
              <Button
                buttonType={'neon'}
                buttonText={'Subscribe'}
                width={'w-full'}
              />
            </div>
          </div>
          <div className="flex md:hidden items-center justify-center cursor-pointer  gap-[20px]">
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
        <div className="  border-t border-white-100 pt-[20px] ">
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-[20px] mt-[20px] text-center items-center">
            <p className="text-[18px] font-normal leading-normal">
              © 2023 Positivus. All rights reserved.
            </p>
            <p className="text-[18px] underline decoration-1 decoration-white-100 font-normal leading-normal">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Footer;
