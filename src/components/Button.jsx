import React from 'react';

const Button = ({ buttonType, buttonText, link }) => {
  return (
    <div
      role="button"
      className={`flex py-[20px] px-[35px] items-center justify-center gap-[10px] rounded-[14px] border ${
        buttonType === 'light'
          ? 'border-black-100'
          : buttonType === 'neon'
          ? 'bg-neon text-black-100'
          : 'bg-black-100 text-white-100'
      }`}
    >
      {link ? (
        <a
          href={link}
          className={`text-[20px] font-normal leading-[28px] ${
            buttonType === 'light'
              ? 'text-black-100'
              : buttonType === 'neon'
              ? 'text-black-100'
              : 'text-white-100'
          }`}
        >
          {buttonText}
        </a>
      ) : (
        <p className="text-center ">{buttonText}</p>
      )}{' '}
    </div>
  );
};

export default Button;
