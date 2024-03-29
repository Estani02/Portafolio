import React from 'react';
import css from '../../../imag/css.jpg';
import figma from '../../../imag/figma.svg.png';
import git from '../../../imag/git.png';
import html from '../../../imag/html.jpg';
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
import { Link } from 'react-router-dom';


export const Display2 = () => {
  const [t] = useTranslation("global");

  return (
    <section className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-evenly p-3 lg:p-0">
      <div className="flex lg:h-[37.992rem] lg:w-[32.563rem] lg:leading-[34px] lg:text-[1.25rem] flex-col gap-4 justify-center" id='About'>
        <h2 className='text-[2rem] lg:text-[2.25rem] font-bold'>{t('display_2.about')}</h2>
        <h4 className='text-[1.25rem] lg:text-[1.5rem] font-semibold'>{t('display_2.im_intro')}</h4>
        <p className='font-medium'>
          {t('display_2.p')}
        </p>
        <Link to={'/cv-estanislao-olmedo'} target="_blank" rel="noopener noreferrer" className='text-white p-2 rounded-lg bg-[#147CE5] font-bold text-center lg:hover:bg-[#0f58a1] transition-colors duration-500'>
          {t('display_2.cv')}
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h4 className='text-[1.25rem] lg:text-[1.5rem] font-semibold mb-6'>{t('display_2.skill')}</h4>
        <div className='grid grid-cols-4 grid-rows-4 gap-8 justify-items-center'>
          <img className='h-[40px] lg:h-[64px]' title='Javascrip' src={javascrip} alt="logo Javascrip" />
          <img className='h-[40px] lg:h-[64px]' title='HTML' src={html} alt="logo HTML" />
          <img className='h-[40px] lg:h-[64px]' title='CSS' src={css} alt="logo CSS" />
          <img className='h-[40px] lg:h-[64px]' title='React' src={react} alt="logo React" />
          <img className='h-[40px] lg:h-[64px]' title='Redux' src={redux} alt="logo Redux" />
          <img className='h-[40px] lg:h-[64px]' title='Tailwndcss' src={talw} alt="logo Tailwndcss" />
          <img className='h-[40px] lg:h-[64px]' title='Node.js' src={node} alt="logo Node.js" />
          <img className='h-[40px] lg:h-[64px]' title='Sequelize' src={seque} alt="logo Sequelize" />
          <img className='h-[40px] lg:h-[64px]' title='pgAdmi' src={pg} alt="logo pgAdmi" />
          <img className='h-[40px] lg:h-[64px]' title='Git' src={git} alt="logo Git" />
          <img className='h-[40px] lg:h-[64px]' title='GitHub' src={github} alt="logo GitHub" />
          <img className='h-[40px] lg:h-[64px]' title='Visual Studio' src={visual} alt="logo Visual" />
          <img className='h-[40px] lg:h-[64px]' title='Jira' src={jira} alt="logo Jira" />
          <img className='h-[40px] lg:h-[64px]' title='Figma' src={figma} alt="logo Figma" />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h4 className='text-[1.25rem] lg:text-[1.5rem] font-semibold mb-6'>{t('display_2.learning')}</h4>
        <div className='flex flex-row gap-6'>
          <img src={reactNative} alt="React Native" className='h-[40px] lg:h-[64px]' title='React Native' />
          <img src={typescrip} alt="TypeScrip" className='h-[40px] lg:h-[64px]' title='TypeScrip' />
        </div>
      </div>
    </section>
  );
};
