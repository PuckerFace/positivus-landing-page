import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import Bubble from '../assets/Bubble.png';
import BubbleMobile from '../assets/BubbleMobile.png';
import arrowRight from '../assets/arrowRight.svg';
import arrowLeft from '../assets/arrowLeft.svg';
import star from '../assets/star.png';
import starGreen from '../assets/starGreen.png';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="flex flex-col w-full items-center rounded-[45px] bg-black-100 text-white-100 p-[60px] gap-[30px]  justify-between ">
      {/* <div
        style={{ backgroundImage: `url(${Bubble})` }}
        className=" bg-no-repeat h-[350px] flex flex-col justify-center items-center   rounded-[45px] "
      >
        <p>{TESTIMONIALS[currentIndex].testimonial}</p>
      </div> */}
      <div className="flex flex-col ">
        <div className="relative">
          <img src={Bubble} alt="" className="hidden sm:block" />
          <img src={BubbleMobile} alt="" className="sm:hidden block" />
          <div className="sm:w-[500px] w-[300px] flex items-center justify-center absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]  ">
            <p>{TESTIMONIALS[currentIndex].testimonial}</p>
          </div>
        </div>
        <div className=" self-start sm:ml-20 mt-2">
          <h5 className="text-[20px] font-medium text-neon ">
            {TESTIMONIALS[currentIndex].name}
          </h5>
          <p className="text-[18px] w-[300px] text-wrap font-normal">
            {TESTIMONIALS[currentIndex].position}
          </p>
        </div>
      </div>
      <div className="flex gap-6 w-1/2 justify-between mt-6 items-center">
        <img
          src={arrowLeft}
          alt=""
          className="cursor-pointer"
          onClick={handlePrev}
        />
        <div className="flex items-center justify-center gap-2">
          {TESTIMONIALS.map((item, index) => (
            <img
              src={currentIndex === index ? starGreen : star}
              key={index}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <img
          src={arrowRight}
          alt=""
          className="cursor-pointer"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default Testimonial;
