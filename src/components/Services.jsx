import React from 'react';
import ServiceCards from './ServiceCards';
import search from '../assets/search.png';
import advert from '../assets/advert.png';
import media from '../assets/media.png';
import email from '../assets/email.png';
import content from '../assets/content.png';
import analysis from '../assets/analysis.png';

const Services = () => {
  return (
    <div className="py-0 w-[1100px] flex flex-col items-center  justify-center  ">
      <div className="gap-[50px] 2xl:gap-[40px] items-center grid xl:grid-cols-2">
        <ServiceCards
          bgColour={'white-100'}
          heading={'Search engine '}
          subheading={'optimization'}
          textColour={'neon'}
          arrowColour={'black'}
          img={search}
        />
        <ServiceCards
          bgColour={'neon'}
          heading={'Pay-per-click '}
          subheading={'advertising'}
          textColour={'white-100'}
          arrowColour={'black'}
          img={advert}
        />
        <ServiceCards
          bgColour="black-100"
          heading={'Social Media '}
          subheading={'Marketing'}
          textColour="white-100"
          arrowColour={'white'}
          img={media}
        />
        <ServiceCards
          bgColour="white-100"
          heading={'Email  '}
          subheading={'Marketing'}
          textColour="neon"
          arrowColour={'black'}
          img={email}
        />
        <ServiceCards
          bgColour={'neon'}
          heading={'Content '}
          subheading={'Creation'}
          textColour={'white-100'}
          arrowColour={'black'}
          img={content}
        />
        <ServiceCards
          bgColour="black-100"
          heading={'Analytics and '}
          subheading={'Tracking'}
          textColour="neon"
          arrowColour={'white'}
          img={analysis}
        />
      </div>
    </div>
    // <div className="py-0 2xl:px-[100px] px-[20px] 2xl:gap-[40px] justify-center items-center w-screen grid lg:grid-cols-2">
    //   <ServiceCards
    //     bgColour="white-100"
    //     heading={'Search engine '}
    //     subheading={'optimization'}
    //     textColour="neon"
    //     arrowColour={'black'}
    //     img={search}
    //   />
    //   <ServiceCards
    //     bgColour="white-100"
    //     heading={'Search engine '}
    //     subheading={'optimization'}
    //     textColour="neon"
    //     arrowColour={'black'}
    //     img={search}
    //   />
    //   <ServiceCards
    //     bgColour="white-100"
    //     heading={'Search engine '}
    //     subheading={'optimization'}
    //     textColour="neon"
    //     arrowColour={'black'}
    //     img={search}
    //   />
    // </div>
  );
};

export default Services;
