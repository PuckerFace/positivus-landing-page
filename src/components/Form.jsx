import React from 'react';
import Button from './Button';
import '../styles/Form.css';

const Form = () => {
  const [selectedReason, setSelectedReason] = React.useState('greet');
  return (
    <div className="gap-[40px] w-[550px] flex flex-col">
      <div className="flex items-center md:justify-start justify-center gap-[20px]">
        <div className="flex  gap-[10px]">
          <input
            type="radio"
            name="reason"
            id="greet"
            value="greet"
            className="accent-neon hidden w-6"
          />
          <div
            htmlFor="greet"
            className={`rounded-full flex items-center justify-center w-6 h-6 border border-black-100  `}
            onClick={() => setSelectedReason('greet')}
          >
            <div
              className={`w-4 h-4 rounded-full ${
                selectedReason === 'greet' ? 'bg-neon ' : ''
              }`}
            ></div>
          </div>
          <label
            htmlFor="greet"
            className="text-[18px] font-normal leading-normal text-black-100"
          >
            Say Hi
          </label>
        </div>
        <div className="flex  gap-[10px]">
          {' '}
          <input
            type="radio"
            name="reason"
            id="quote"
            value="quote"
            className="accent-neon w-6 hidden"
          />
          <div
            className={`rounded-full w-6 h-6 flex items-center justify-center border border-black-100 
            `}
            onClick={() => setSelectedReason('quote')}
            htmlFor="quote"
          >
            <div
              className={`w-4 h-4 rounded-full ${
                selectedReason === 'quote' ? 'bg-neon' : ''
              }`}
            ></div>
          </div>
          <label
            htmlFor="quote"
            className="text-[18px] font-normal leading-normal text-black-100"
          >
            Get a Quote
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-[25px] relative ">
        <div>
          <label htmlFor="name">Name</label>
          <div className="relative border-[1.5px] border-black-100 rounded-[14px] z-1">
            <input
              type="text"
              id="name"
              className="w-full  rounded-[14px] p-[18px] text-[18px] font-normal leading-normal text-black-100 outline-0 "
              placeholder="Name"
            />
            <span className="focus rounded-[14px]"></span>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <div className="relative border-[1.5px] border-black-100 rounded-[14px] z-1">
            <input
              type="email"
              id="email"
              className="w-full  rounded-[14px] p-[18px] text-[18px] font-normal leading-normal text-black-100 outline-0 "
              placeholder="Email"
            />
            <span className="focus rounded-[14px]"></span>
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <div className="relative border-[1.5px] border-black-100 rounded-[14px] z-1">
            <textarea
              id="message"
              className="w-full  rounded-[14px] p-[18px] text-[18px] font-normal outline-0 leading-normal text-black-100 resize-none"
              placeholder="Message "
              rows="4"
            ></textarea>
            <span className="focus rounded-[14px]"></span>
          </div>
        </div>
      </div>
      <Button buttonText={'Send Message'} buttonType={'dark'} />
    </div>
  );
};

export default Form;
