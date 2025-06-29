import React from 'react';
import Form from './Form';
import illustration from '../assets/illustration.png';

const Contact = () => {
  return (
    <div className="bg-white-100 flex relative rounded-[45px] px-[80px] py-[60px] text-black-100 ">
      <Form />
      <img
        src={illustration}
        alt=""
        className="absolute self-end top-7 -right-80"
      />
    </div>
  );
};

export default Contact;
