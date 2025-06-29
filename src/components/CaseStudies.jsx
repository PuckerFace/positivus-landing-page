import React from 'react';
import arrow from '../assets/arrow.svg';
import line from '../assets/line.png';
import { USE_CASES } from '../constants';

const CaseStudies = () => {
  return (
    <div className=" flex justify-center  w-full items-center" id="use-cases">
      {/* py-[70px] px-[60px] w-[286px]*/}
      <div className="p-[50px] flex items-start justify-between rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-black-100 gap-[64px] text-white-100  ">
        {USE_CASES.map((item, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-start gap-[20px] w-fit"
            >
              <p className="text-[18px] font-normal leading-normal ">
                {item.description}
              </p>
              <div className="text-neon flex items-center gap-[10px]">
                <a href="#">Learn more</a>
                <img src={arrow} alt="arrow" className="" />
              </div>
            </div>
            {index !== USE_CASES.length - 1 && <img src={line} alt="" />}
          </>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
