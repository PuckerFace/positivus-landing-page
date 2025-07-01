import React from 'react';
import ServiceCards from './ServiceCards';
import { SERVICES } from '../constants';
import { Fade } from 'react-awesome-reveal';

const Services = () => {
  return (
    <div
      className="py-0 w-full flex flex-col items-center  justify-center  "
      id="services"
    >
      <div className="gap-[50px] w-full xl:w-full sm:w-[600px] 2xl:gap-[40px] items-center grid xl:grid-cols-2">
        <Fade cascade damping={0.15} triggerOnce>
          {SERVICES.map((service, index) => (
            <ServiceCards
              key={index}
              bgColour={service.bgColour}
              heading={service.heading}
              subheading={service.subHeading}
              textColour={service.textColour}
              arrowColour={service.arrowColour}
              img={service.img}
              height={service.height}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Services;
