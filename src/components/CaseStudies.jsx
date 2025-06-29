import React from 'react';
import arrow from '../assets/arrow.svg';
import line from '../assets/line.png';
const CaseStudies = () => {
  return (
    <div
      className="py-0 flex justify-center   px-[100px] items-center"
      id="use-cases"
    >
      <div className="py-[70px] px-[60px] shrink-0 flex items-start justify-between rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-black-100 gap-[64px] text-white-100  ">
        <div className="flex flex-col items-start gap-[20px] w-[286px] ">
          <p className="text-[18px] font-normal leading-normal ">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <div className="text-neon flex items-center gap-[10px]">
            <a href="#">Learn more</a>
            <img src={arrow} alt="arrow" className="" />
          </div>
        </div>
        <img src={line} alt="" />
        <div className="flex flex-col items-start gap-[20px] w-[286px] ">
          <p className="text-[18px] font-normal leading-normal ">
            For a B2B software company, we developed an SEO strategy that
            resulted in a first page ranking for key keywords and a 200%
            increase in organic traffic.
          </p>
          <div className="text-neon flex items-center gap-[10px]">
            <a href="#">Learn more</a>
            <img src={arrow} alt="arrow" className="" />
          </div>
        </div>
        <img src={line} alt="" />
        <div className="flex flex-col items-start gap-[20px] w-[286px] ">
          <p className="text-[18px] font-normal leading-normal ">
            For a national retail chain, we created a social media marketing
            campaign that increased followers by 25% and generated a 20%
            increase in online sales.
          </p>
          <div className="text-neon flex items-center gap-[10px]">
            <a href="#">Learn more</a>
            <img src={arrow} alt="arrow" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
