import React from 'react';
import arrowBlack from '../assets/arrowBlack.svg';
import arrowWhite from '../assets/arrowWhite.svg';

const bgColorMap = {
  neon: 'bg-neon',
  'white-100': 'bg-white-100',
  'black-100': 'bg-black-100',
};

const ServiceCards = ({
  bgColour,
  textColour,
  heading,
  subheading,
  arrowColour,
  img,
  height,
}) => {
  return (
    <div
      className={`lg:w-full md:w-[600px] p-10 lg:p-[50px] flex justify-between items-center rounded-[45px] border border-black-100 shadow-[0px_5px_0px_#191A23] ${bgColorMap[bgColour]}`}
    >
      <div className="flex flex-col justify-center gap-5 items-start lg:gap-[93px]">
        <div
          className={`lg:text-[30px] text-[20px] xs:text-[26px] flex flex-col    font-medium leading-normal text-black-100  `}
        >
          <div className={` w-fit px-2 rounded ${bgColorMap[textColour]}`}>
            {' '}
            {heading}
          </div>
          <div className={`w-fit px-2 rounded ${bgColorMap[textColour]} `}>
            {' '}
            {subheading}
          </div>
        </div>

        <div className="flex    items-end lg:items-center lg:gap-[10px] gap-[70px]">
          <img
            src={arrowColour === 'black' ? arrowBlack : arrowWhite}
            alt=""
            className="w-10 h-10 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <p
            className={`text-[20px] font-normal cursor-pointer  leading-[28px] hidden md:block ${
              arrowColour === 'black' ? 'text-black-100 ' : 'text-white-100'
            } `}
          >
            Learn more
          </p>

          <img
            src={img}
            alt=""
            className=" w-[150px] h-[100px] object-cover  block sm:hidden  "
            height={height}
          />
        </div>
      </div>
      <div className="hidden sm:block">
        <img
          src={img}
          alt=""
          className=" w-full lg:w-[210px] 2xl:w-full "
          height={height}
        />
      </div>
    </div>
  );
};

export default ServiceCards;
