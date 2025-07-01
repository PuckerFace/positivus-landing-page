import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import social from '../assets/social.svg';
import Button from './Button';
import { Fade } from 'react-awesome-reveal';

const Team = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] ">
        <Fade cascade damping={0.2} triggerOnce>
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="flex flex-col p-[25px] gap-[10px] shadow-[0px_5px_0px_#191A23] border border-black-100 text-black-100 rounded-[45px] h-full "
            >
              <div className="flex  relative gap-[20px]">
                <div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className=" object-cover hover:scale-110 transition-transform duration-300 "
                  />
                </div>
                <div className="flex flex-col flex-1 justify-end">
                  <h5 className="sm:text-[20px] text-lg  font-medium ">
                    {member.name}
                  </h5>
                  <p className="sm:text-[18px] text-sm font-normal">
                    {member.position}
                  </p>
                </div>
                <img src={social} alt="" className="absolute right-0 top-0" />
              </div>
              <div className="border-t border-black-100 mt-[20px] pt-[20px]">
                <p className="text-[18px] font-normal ">{member.description}</p>
              </div>
            </div>
          ))}
        </Fade>
      </div>
      <div className="flex items-end justify-end mt-[30px]">
        <Button buttonType={'dark'} buttonText={'See all team'} />
      </div>
    </div>
  );
};

export default Team;
