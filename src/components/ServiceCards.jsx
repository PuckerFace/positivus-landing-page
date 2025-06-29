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
      className={`2xl:w-[600px] w-[550px] p-[50px] flex justify-between items-center rounded-[45px] border border-black-100 shadow-[0px_5px_0px_#191A23] ${bgColorMap[bgColour]}`}
    >
      <div className="flex flex-col justify-center items-start gap-[93px]">
        <div
          className={`text-[30px] flex flex-col    font-medium leading-normal text-black-100  `}
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
        <div className="flex items-center gap-[15px]">
          <img src={arrowColour === 'black' ? arrowBlack : arrowWhite} alt="" />
          <p
            className={`text-[20px] font-normal leading-[28px] hidden md:block ${
              arrowColour === 'black' ? 'text-black-100' : 'text-white-100'
            } `}
          >
            Learn more
          </p>
        </div>
      </div>
      <div>
        <img src={img} alt="" className="shrink-0 w-[210px] " height={height} />
      </div>
    </div>
  );
};

export default ServiceCards;
