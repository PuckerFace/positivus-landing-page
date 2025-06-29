import React from 'react';

const Headings = ({ heading, subheading, width }) => {
  return (
    <div className="flex w-full  py-0  gap-[40px] items-start">
      <h2 className="text-[40px] px-2 rounded font-medium leading-normal text-black bg-neon">
        {heading}
      </h2>
      <p
        className={` ${
          width === 'less' ? 'w-[292px]' : 'w-[580px]'
        } shrink-0 text-[18px] font-normal leading-normal text-black-100`}
      >
        {subheading}
      </p>
    </div>
  );
};

export default Headings;
