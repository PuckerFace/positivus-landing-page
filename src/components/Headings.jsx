import React from 'react';

const Headings = ({ heading, subheading, width }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full  py-0  gap-[40px] items-center  sm:items-start">
      <h2 className="text-[40px] px-2 rounded  font-medium leading-normal text-black bg-neon">
        {heading}
      </h2>
      <p
        className={` ${
          width === 'less' ? 'lg:w-[292px] w-full' : 'w-full lg:w-[580px]'
        }  text-[18px] lg:text-left text-center font-normal leading-normal text-black-100`}
      >
        {subheading}
      </p>
    </div>
  );
};

export default Headings;
