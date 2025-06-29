// import React, { useState } from 'react';
// import arrow from '../assets/arrow.svg';
// import line from '../assets/line.png';
// import { USE_CASES } from '../constants';

// const CaseStudies = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? USE_CASES.length - 1 : prevIndex - 1
//     );
//   };
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === USE_CASES.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className=" flex justify-center  w-full items-center" id="use-cases">
//       <div className="flex items-center lg:hidden  justify-between w-full  px-[20px] lg:px-0">
//         <img
//           src={arrow}
//           alt="arrow"
//           className="cursor-pointer  "
//           onClick={handlePrev}
//         />
//         <div className="p-[50px] items-start justify-between rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-black-100 gap-[64px] text-white-100  ">
//           <div className="flex flex-col items-start gap-[20px] w-fit">
//             <p className="text-[18px] font-normal leading-normal ">
//               {USE_CASES[currentIndex].description}
//             </p>
//             <div className="text-neon flex items-center gap-[10px]">
//               <a href="#">Learn more</a>
//               <img src={arrow} alt="arrow" className="" />
//             </div>
//           </div>
//         </div>
//         <img
//           src={arrow}
//           alt="arrow"
//           className="cursor-pointer"
//           onClick={handleNext}
//         />
//       </div>

//       <div className="p-[50px] hidden lg:flex items-start justify-between rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-black-100 gap-[64px] text-white-100  ">
//         {USE_CASES.map((item, index) => (
//           <>
//             <div
//               key={index}
//               className="flex flex-col items-start gap-[20px] w-fit"
//             >
//               <p className="text-[18px] font-normal leading-normal ">
//                 {item.description}
//               </p>
//               <div className="text-neon flex items-center gap-[10px]">
//                 <a href="#">Learn more</a>
//                 <img src={arrow} alt="arrow" className="" />
//               </div>
//             </div>
//             {index !== USE_CASES.length - 1 && <img src={line} alt="" />}
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CaseStudies;

import React from 'react';
import arrow from '../assets/arrow.svg';
import line from '../assets/line.png';
import { USE_CASES } from '../constants';

const CaseStudies = () => {
  return (
    <div className="flex justify-center  w-full  items-center" id="use-cases">
      {/* Mobile version */}
      <div className="lg:hidden w-full pb-5 overflow-x-auto snap-x snap-mandatory overflow-y-hidden h-full">
        <div className="flex flex-nowrap gap-[20px]">
          {USE_CASES.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0  p-[50px] w-[350px] h-full rounded-[45px] shadow-[0px_5px_0px_#191A23] gap-7 bg-black-100 text-white-100 flex flex-col justify-between snap-start"
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
      <div className="hidden lg:flex p-[50px] items-start justify-between rounded-[45px] shadow-[0px_5px_0px_#191A23] bg-black-100 gap-[64px] text-white-100">
        {USE_CASES.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-start gap-[20px] w-fit">
              <p className="text-[18px] font-normal leading-normal">
                {item.description}
              </p>
              <div className="text-neon flex items-center gap-[10px]">
                <a href="#">Learn more</a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            {index !== USE_CASES.length - 1 && <img src={line} alt="" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
