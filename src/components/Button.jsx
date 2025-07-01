// import React from 'react';

// const Button = ({ buttonType, buttonText, link }) => {
//   return (
//     <div
//       role="button"
//       className={`flex py-[20px] px-[35px] items-center justify-center gap-[10px] rounded-[14px] border cursor-pointer ${
//         buttonType === 'light'
//           ? 'border-black-100'
//           : buttonType === 'neon'
//           ? 'bg-neon  text-black-100 hover:bg-neon/70 '
//           : 'bg-black-100 text-white-100'
//       }`}
//     >
//       {link ? (
//         <a
//           href={link}
//           className={`text-[20px] font-normal leading-[28px] ${
//             buttonType === 'light'
//               ? 'text-black-100'
//               : buttonType === 'neon'
//               ? 'text-black-100'
//               : 'text-white-100'
//           }`}
//         >
//           {buttonText}
//         </a>
//       ) : (
//         <p className="text-center ">{buttonText}</p>
//       )}{' '}
//     </div>
//   );
// };

// export default Button;

import React from 'react';
import '../styles/Button.css';

const Button = ({ buttonType, buttonText, link, width }) => {
  const baseClasses = `relative overflow-hidden z-0 group flex py-[20px] px-[35px] items-center justify-center gap-[10px] rounded-[14px] border cursor-pointer transition-all duration-300 `;

  const typeClass =
    buttonType === 'light'
      ? 'btn-light border-black-100 bg-transparent text-black-100'
      : buttonType === 'neon'
      ? 'btn-neon border-black-100 bg-neon text-black-100'
      : 'btn-dark border-black-100 bg-black-100 text-white-100';

  const hoverTextClass =
    buttonType === 'light'
      ? 'group-hover:text-white-100'
      : buttonType === 'neon'
      ? 'group-hover:text-black-100'
      : 'group-hover:text-black-100';

  return (
    <button className={`${baseClasses} ${typeClass} ${width ? 'w-full' : ''}`}>
      {link ? (
        <a
          href={link}
          className={`relative z-10 text-lg xs:text-[20px] font-normal leading-[28px] transition-colors duration-300 ${hoverTextClass}`}
        >
          {buttonText}
        </a>
      ) : (
        <p
          className={`relative z-10 text-lg xs:text-[20px] font-normal leading-[28px] transition-colors duration-300 ${hoverTextClass}`}
        >
          {buttonText}
        </p>
      )}
    </button>
  );
};

export default Button;
