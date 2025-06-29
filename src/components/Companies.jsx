import React from 'react';
import { COMPANIES } from '../constants';

const Companies = () => {
  return (
    <div className="flex  py-0 pb-[70px] justify-between grayscale items-start  ">
      {COMPANIES.map((company, index) => (
        <img src={company.logo} alt="" key={index} />
      ))}
    </div>
  );
};

export default Companies;
