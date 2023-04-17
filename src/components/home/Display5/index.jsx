/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import gmail from '../../../imag/gmail.svg';
import linkedin from '../../../imag/linkedin.svg';
import github from '../../../imag/github_blue.svg';
import { useTranslation } from 'react-i18next';

const Display5 = () => {
  const [t] = useTranslation("global");

  return (
    <section className="bg-[#000000] p-3 md:p-0 h-screen">
      <div className="mt-[5rem] md:mb-12 md:ml-[5rem] md:mt-[10rem] flex flex-col gap-4">
        <h2 className="text-[2rem] md:text-[2.25rem] font-bold text-[#FFFFFF]">{t('display_5.h2')}</h2>
        <h4 className="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#FFFFFF]">
        {t('display_5.h4')}
        </h4>
      </div>
      <ul className="mt-[5rem] flex w-full flex-row md:justify-around justify-between">
        <li className='md:hover:scale-125 md:transition-transform duration-500 group'>
          <a href="mailto:estaniolmedo@gmail.com" target='_blank' className="flex flex-col items-center justify-center">
            <img src={gmail} alt="Icon Gmail" className="h-[3rem]" />
            <span className="font-bold text-[#FFFFFFFF] group-hover:text-[#bfb9b9] transition-colors duration-500">{t('display_5.gmail')}</span>
          </a>
        </li>
        <li className='md:hover:scale-125 md:transition-transform duration-500 group'>
          <a href="https://www.linkedin.com/in/estanislao-olmedo-208510247/" target='_blank' className="flex flex-col items-center justify-center">
            <img src={linkedin} alt="Icon Linkedin" className="h-[3rem]" />
            <span className="font-bold text-[#FFFFFFFF] group-hover:text-[#bfb9b9] transition-colors duration-500">{t('display_5.linkedin')}</span>
          </a>
        </li>
        <li className='md:hover:scale-125 md:transition-transform duration-500 group'>
          <a href="https://github.com/Estani02" target='_blank' className="flex flex-col items-center justify-center">
            <img src={github} alt="Icon GituHub" className="h-[3rem]" />
            <span className="font-bold text-[#FFFFFFFF] group-hover:text-[#bfb9b9] transition-colors duration-500" id='Contact'>{t('display_5.github')}</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Display5;
