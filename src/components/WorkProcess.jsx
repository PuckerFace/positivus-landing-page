import React, { useState } from 'react';
import { WORK_PROCESS } from '../constants';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import '../styles/Workprocess.css';
import { Fade } from 'react-awesome-reveal';

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
      <Fade cascade damping={0.15} triggerOnce>
        {WORK_PROCESS.map((item, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className={`shadow-[0px_5px_0px_#191A23] flex flex-col border border-black-100 text-black-100 p-[35px] rounded-[45px] gap-[30px] mb-7 ${
              activeIndex === index ? 'active  ' : 'bg-white-100'
            } relative overflow-hidden z-0 transition-all duration-300 cursor-pointer bg-fill`}
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center lg:justify-start justify-center gap-[20px] relative z-10">
                <h4 className="lg:text-[60px] text-xl xs:text-3xl font-medium ">
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
                } transition-transform duration-300 w-10 xs:w-[58px] `}
              />
            </div>
            {activeIndex === index && (
              <div className="border-t border-black-100 py-[20px] transition-all relative z-10">
                <p className="text-[18px] font-normal ">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default WorkProcess;
