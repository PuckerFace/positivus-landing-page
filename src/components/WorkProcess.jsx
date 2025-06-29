import React, { useState } from 'react';
import { WORK_PROCESS } from '../constants';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

const WorkProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="w-full ">
      {WORK_PROCESS.map((item, index) => (
        <div
          key={index}
          onClick={() => handleToggle(index)}
          className={`shadow-[0px_5px_0px_#191A23] flex flex-col border border-black-100 text-black-100 p-[35px]  rounded-[45px]  gap-[30px] mb-7 ${
            activeIndex === index ? 'bg-neon' : 'bg-white-100'
          } transition-all duration-300 cursor-pointer`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:justify-start justify-center gap-[20px]">
              <h4 className="lg:text-[60px] text-3xl font-medium ">
                0{item.id}
              </h4>
              <h5 className="lg:text-[30px] text-lg xs:text-xl font-medium">
                {item.title}
              </h5>
            </div>
            <img
              src={activeIndex === index ? minus : plus}
              alt=""
              className={`${
                activeIndex === index ? 'rotate-180' : ''
              } transition-transform duration-300`}
            />
          </div>
          {activeIndex === index && (
            <div className="border-t border-black-100 py-[20px] transition-all">
              <p className="text-[18px] font-normal ">{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkProcess;
