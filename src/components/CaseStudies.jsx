import React from 'react';
import arrow from '../assets/arrow.svg';

import { USE_CASES } from '../constants';
import { Fade } from 'react-awesome-reveal';

const CaseStudies = () => {
  return (
    <div className="flex justify-center  w-full  items-center" id="use-cases">
      {/* Mobile version */}
      <div className="xl:hidden w-full pb-5 overflow-x-auto snap-x snap-mandatory overflow-y-hidden h-full">
        <div className="flex flex-nowrap gap-[20px]">
          {USE_CASES.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0  p-[50px] w-full h-full rounded-[45px] shadow-[0px_5px_0px_#191A23] gap-7 bg-black-100 text-white-100 flex flex-col justify-between snap-start"
            >
              <p className="text-[16px] font-normal leading-normal">
                {item.description}
              </p>
              <div className="text-neon flex items-center gap-[10px] mt-auto">
                <a href="#">Learn more</a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop version */}

      <div className="hidden xl:flex p-[50px] items-start justify-between rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-black-100 gap-[64px] text-white-100">
        {USE_CASES.map((item, index) => (
          <React.Fragment key={index}>
            <Fade direction="up" triggerOnce>
              <div
                className={`flex flex-col items-start gap-[20px] w-fit  ${
                  index !== USE_CASES.length - 1
                    ? 'border-r pr-6  border-white-100'
                    : ''
                }`}
              >
                <p className="text-[18px] font-normal leading-normal">
                  {item.description}
                </p>
                <div className="text-neon flex items-center gap-[10px]">
                  <a href="#">Learn more</a>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              </div>

              {/* {index !== USE_CASES.length - 1 && <img src={line} alt="" />} */}
            </Fade>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
