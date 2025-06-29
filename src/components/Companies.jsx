import React from 'react';
import amazon from '../assets/amazon.svg';
import dribbble from '../assets/dribbble.svg';
import zoom from '../assets/zoom.svg';
import netflix from '../assets/netflix.svg';
import notion from '../assets/notion.svg';
import hubspot from '../assets/hubspot.svg';

const Companies = () => {
  return (
    <div className="flex  py-0 pb-[70px] justify-between grayscale items-start  ">
      <img src={amazon} alt="" />
      <img src={dribbble} alt="" />
      <img src={hubspot} alt="" />
      <img src={notion} alt="" />
      <img src={netflix} alt="" />
      <img src={zoom} alt="" />
    </div>
  );
};

export default Companies;
