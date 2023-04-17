import React from 'react';
import css from '../../../imag/css.svg';
import figma from '../../../imag/figma.svg.png';
import git from '../../../imag/git.png';
import html from '../../../imag/html.svg';
import javascrip from '../../../imag/javascrip.svg';
import jira from '../../../imag/jira.svg';
import node from '../../../imag/node.png';
import talw from '../../../imag/tailwind.svg';
import seque from '../../../imag/sequelize.svg';
import redux from '../../../imag/redux.png';
import visual from '../../../imag/visual.svg';
import pg from '../../../imag/pgadmi.svg';
import react from '../../../imag/react.png';
import github from '../../../imag/github.svg';
import reactNative from '../../../imag/ReactNative.svg';
import typescrip from '../../../imag/Typescrip.svg';
import { useTranslation } from 'react-i18next';



export const Display2 = () => {
  const [t] = useTranslation("global");

  return (
    <section className="flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly p-3 md:p-0">
      <div className="flex md:h-[37.992rem] md:w-[32.563rem] md:leading-[34px] md:text-[1.25rem] flex-col gap-4 justify-center" id='About'>
        <h2 className='text-[2rem] md:text-[2.25rem] font-bold'>{t('display_2.about')}</h2>
        <h4 className='text-[1.25rem] md:text-[1.5rem] font-semibold'>{t('display_2.im_intro')}</h4>
        <p className='font-medium'>
          {t('display_2.p')}
        </p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h4 className='text-[1.25rem] md:text-[1.5rem] font-semibold mb-6'>{t('display_2.skill')}</h4>
        <div className='grid grid-cols-4 grid-rows-4 gap-8 justify-items-center'>
          <img className='h-[40px] md:h-[64px]' src={javascrip} alt="logo Javascrip" />
          <img className='h-[40px] md:h-[64px]' src={html} alt="logo HTML" />
          <img className='h-[40px] md:h-[64px]' src={css} alt="logo CSS" />
          <img className='h-[40px] md:h-[64px]' src={react} alt="logo React" />
          <img className='h-[40px] md:h-[64px]' src={redux} alt="logo Redux" />
          <img className='h-[40px] md:h-[64px]' src={talw} alt="logo Tailwndcss" />
          <img className='h-[40px] md:h-[64px]' src={node} alt="logo Node.js" />
          <img className='h-[40px] md:h-[64px]' src={seque} alt="logo Sequelize" />
          <img className='h-[40px] md:h-[64px]' src={pg} alt="logo pgAdmi" />
          <img className='h-[40px] md:h-[64px]' src={git} alt="logo Git" />
          <img className='h-[40px] md:h-[64px]' src={github} alt="logo Git" />
          <img className='h-[40px] md:h-[64px]' src={visual} alt="logo GitHub" />
          <img className='h-[40px] md:h-[64px]' src={jira} alt="logo Jira" />
          <img className='h-[40px] md:h-[64px]' src={figma} alt="logo Figma" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='text-[1.25rem] md:text-[1.5rem] font-semibold mb-6'>{t('display_2.learning')}</h4>
        <div className='flex flex-row gap-6'>
          <img src={reactNative} alt="React Native" className='h-[40px] md:h-[64px]' />
          <img src={typescrip} alt="TypeScrip" className='h-[40px] md:h-[64px]' />
        </div>
      </div>
    </section>
  );
};
