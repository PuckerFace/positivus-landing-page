import React from 'react';

const Button = ({ buttonType, buttonText }) => {
  return (
    <div
      role="button"
      className={`flex py-[20px] px-[35px] items-start gap-[10px] rounded-[14px] border ${
        buttonType === 'light'
          ? 'border-black-100'
          : 'bg-black-100 text-white-100'
      }`}
    >
      <p className="text-center ">{buttonText}</p>
    </div>
  );
};

export default Button;
