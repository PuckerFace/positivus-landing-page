import React from 'react';
import { COMPANIES } from '../constants';
import Marquee from 'react-fast-marquee';
const Companies = () => {
  return (
    <Marquee autoFill pauseOnHover speed={80} className="w-full">
      <div className="flex justify-between px-6 items-center lg:gap-[80px]  gap-[40px] grayscale   ">
        {COMPANIES.map((company, index) => (
          <img src={company.logo} alt="" key={index} />
        ))}
      </div>
    </Marquee>
  );
};

export default Companies;
