import React from 'react';
import Button from './Button';
import cta from '../assets/cta.png';

const CTA = () => {
  return (
    <div className="py-[30px] flex justify-center relative   items-center">
      <div className="lg:py-0 p-[30px] lg:px-[60px] justify-center flex items-center w-full h-full lg:h-[350px] lg:justify-between rounded-[45px] bg-white-100 gap-[70px] 2xl:gap-[200px] ">
        <div className="flex flex-col items-center lg:text-left text-center lg:items-start gap-[26px] w-[500px] p-[3 0px]">
          <h3 className="text-[30px] font-medium leading-normal text-black-100 ">
            Let’s make things happen{' '}
          </h3>
          <p className="text-[18px] font-normal leading-normal text-black-100">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button buttonType={'dark'} buttonText={'Get your free proposal'} />
        </div>
        <div className="z-1 absolute right-0 hidden lg:block ">
          <img src={cta} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
