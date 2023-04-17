/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import github from '../../../imag/github.svg';
import deploy from '../../../imag/deploy.svg';
import clima from '../../../imag/clima.svg';
import movie from '../../../imag/movie.svg';
import food from '../../../imag/food.svg';
import refugio from '../../../imag/refugio.svg';
import { useTranslation } from 'react-i18next';

export const CardsResponsive = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <ul className="flex flex-col p-3 md:hidden gap-5">
      <li className="flex flex-col items-center justify-center gap-2">
        <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
          Refugio de animales
        </h4>
        <img src={refugio} alt="" />
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col gap-1 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg">
            <div>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.area')}</b>FrontEnd
              </p>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.tecno')}</b>React, Redux
                    Toolkit, Tailwind, MUI Material
              </p>
            </div>
            <p className="text-center text-[0.75rem] text-[#FFFFFFFF]">
              {t('display_4.more_details')}
            </p>
          </div>
          <div className="flex w-full flex-row justify-around">
            <a
              href="https://github.com/T1Scaynet/FE-Shelter/tree/develop"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
              target=" _blank"
            >
              <img src={github} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                {t('display_4.repo')}
              </span>
            </a>
            <a
              href="https://fe-shelter.vercel.app/"
              target=" _blank"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
            >
              <img src={deploy} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                Deploy
              </span>
            </a>
          </div>
        </div>
      </li>
      {/* /////////////////////////////////////////////////////////// */}
      <li className="flex flex-col items-center justify-center gap-2">
        <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
        Delicious Recipes
        </h4>
        <img src={food} alt="" />
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col gap-1 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg">
            <div>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.area')}</b>Full Stack
              </p>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.tecno')}</b>Express,
                    Sequelize, Postgresql, React, Redux, CSS Module
              </p>
            </div>
            <p className="text-center text-[0.75rem] text-[#FFFFFFFF]">
              {t('display_4.more_details')}
            </p>
          </div>
          <div className="flex w-full flex-row justify-around">
            <a
              href="https://github.com/Estani02/PI-Food"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
              target=" _blank"
            >
              <img src={github} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                {t('display_4.repo')}
              </span>
            </a>
            <a
              href="https://deliciousrecipes-pi.surge.sh/"
              target=" _blank"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
            >
              <img src={deploy} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                Deploy
              </span>
            </a>
          </div>
        </div>
      </li>
      {/* /////////////////////////////////////////////////////////// */}
      <li className="flex flex-col items-center justify-center gap-2">
        <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
        Movie App
        </h4>
        <img src={movie} alt="" />
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col gap-1 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg">
            <div>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.area')}</b>FrontEnd
              </p>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.tecno')}</b>React, Redux, CCS Module
              </p>
            </div>
            <p className="text-center text-[0.75rem] text-[#FFFFFFFF]">
              {t('display_4.more_details')}
            </p>
          </div>
          <div className="flex w-full flex-row justify-around">
            <a
              href="https://github.com/Estani02/Movie-App"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
              target=" _blank"
            >
              <img src={github} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                {t('display_4.repo')}
              </span>
            </a>
            <a
              href="https://loquacious-fudge-f8bf0f.netlify.app/"
              target=" _blank"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
            >
              <img src={deploy} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                Deploy
              </span>
            </a>
          </div>
        </div>
      </li>
      {/* /////////////////////////////////////////////////////////// */}
      <li className="flex flex-col items-center justify-center gap-2">
        <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
          Weather App
        </h4>
        <img src={clima} alt="" />
        <div className="flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col gap-1 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg">
            <div>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.area')}</b>FrontEnd
              </p>
              <p className="text-[0.75rem] text-[#FFFFFFFF]">
                <b className="text-[0.8rem]">{t('display_4.tecno')}</b>React, CSS
              </p>
            </div>
            <p className="text-center text-[0.75rem] text-[#FFFFFFFF]">
              {t('display_4.more_details')}
            </p>
          </div>
          <div className="flex w-full flex-row justify-around">
            <a
              href="https://github.com/Estani02/Weather-App"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
              target=" _blank"
            >
              <img src={github} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                {t('display_4.repo')}
              </span>
            </a>
            <a
              href="https://weather-app-olemdo.surge.sh/"
              target=" _blank"
              className="flex h-12 w-[130px] flex-row items-center justify-center rounded-lg bg-[#8080804f] py-2 backdrop-blur-lg"
            >
              <img src={deploy} alt="" className="h-[30px]" />
              <span className="ml-[4px] font-semibold text-[#FFFFFFFF] transition-colors duration-500 group-hover:text-[#147CE5]">
                Deploy
              </span>
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};
