import React from 'react';
import Form from './Form';
import illustration from '../assets/illustration.png';

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-white-100 flex py-[50px] px-[30px] relative rounded-[45px] md:px-[80px] md:py-[60px] text-black-100 "
    >
      <Form />
      <img
        src={illustration}
        alt=""
        className="absolute self-end top-7 -right-80 hidden lg:block"
      />
    </div>
  );
};

export default Contact;
