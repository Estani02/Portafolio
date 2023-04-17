/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import clima from '../../../imag/clima.svg';
import movie from '../../../imag/movie.svg';
import food from '../../../imag/food.svg';
import refugio from '../../../imag/refugio.svg';
import github from '../../../imag/github.svg';
import deploy from '../../../imag/deploy.svg';
import { CardsResponsive } from './cardsResponsive';
import { useTranslation } from 'react-i18next';

export const Display4 = () => {
  const [t, i18n] = useTranslation("global");

  const [estaSobreImagen, setEstaSobreImagen] = useState({
    refugio: false,
    food: false,
    clima: false,
    movie: false,
  });

  function manejarMouseSobreImagen(card) {
    switch (card) {
      case 'refugio':
        setEstaSobreImagen({ ...estaSobreImagen, refugio: true });
        break;
      case 'food':
        setEstaSobreImagen({ ...estaSobreImagen, food: true });
        break;
      case 'movie':
        setEstaSobreImagen({ ...estaSobreImagen, movie: true });
        break;
      case 'clima':
        setEstaSobreImagen({ ...estaSobreImagen, clima: true });
        break;
      default:
        break;
    }
  }

  function manejarMouseFueraImagen(card) {
    switch (card) {
      case 'refugio':
        setEstaSobreImagen({ ...estaSobreImagen, refugio: false });
        break;
      case 'food':
        setEstaSobreImagen({ ...estaSobreImagen, food: false });
        break;
      case 'movie':
        setEstaSobreImagen({ ...estaSobreImagen, movie: false });
        break;
      case 'clima':
        setEstaSobreImagen({ ...estaSobreImagen, clima: false });
        break;
      default:
        break;
    }
  }

  return (
    <section className="mt-[2.5rem] md:mt-[10rem] bg-[#000000] py-3">
      <div className="mb-12 md:p-0 p-3 md:ml-[5rem] md:mt-20 flex flex-col gap-4" id='Projects'>
        <h2 className="text-[2rem] md:text-[2.25rem] font-bold text-[#FFFFFF]">{t('display_4.h2')}</h2>
        <h4 className="text-[1.25rem] md:text-[1.5rem] font-semibold text-[#FFFFFF]">
        {t('display_4.h4')}
        </h4>
      </div>
      <ul className="md:grid grid-cols-2 grid-rows-2 justify-items-center gap-8 hidden">
        <li className="relative box-border flex  h-[275.69px] w-[588px] items-center justify-center overflow-hidden rounded-lg bg-[#ffffff00] p-[10px]">
          <figure className="m-0 flex w-full items-center justify-center">
            <img
              src={refugio}
              alt="Refugio"
              className={`absolute left-0 top-0 h-full w-full rounded-[8px] object-cover transition-all duration-1000  ${
                estaSobreImagen.refugio && 'hover:z-10'
              } ${estaSobreImagen.refugio && 'opacity-80'} ${
                estaSobreImagen.refugio && 'scale-[1.2]'
              } ${estaSobreImagen.refugio && 'blur-[2px]'}`}
              onMouseEnter={() => manejarMouseSobreImagen('refugio')}
              onMouseLeave={() => manejarMouseFueraImagen('refugio')}
            />
            <figcaption
              className={`${
                estaSobreImagen.refugio ? 'w-full' : 'invisible'
              } flex flex-col items-center justify-center gap-4`}
            >
              <div
                className={`${
                  estaSobreImagen.refugio ? 'z-20' : 'invisible'
                } flex h-[10rem] w-[25rem] flex-col items-center justify-center gap-3 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('refugio')}
              >
                <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
                  Refugio de animales
                </h4>
                <div>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem]">{t('display_4.area')}</b>FrontEnd
                  </p>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem]">{t('display_4.tecno')}</b>React, Redux
                    Toolkit, Tailwind, MUI Material
                  </p>
                </div>
                <p className="text-[0.75rem] text-[#FFFFFFFF]">
                  {t('display_4.more_details')}
                </p>
              </div>
              <div
                className={`${
                  estaSobreImagen.refugio ? 'z-20' : 'invisible'
                } flex w-[25rem] flex-row items-center justify-around gap-10 rounded-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('refugio')}
              >
                <a
                  href="https://github.com/T1Scaynet/FE-Shelter/tree/develop"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.refugio
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('refugio')}
                >
                  <img
                    src={github}
                    alt=""
                    className={`${
                      estaSobreImagen.refugio
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    {t('display_4.repo')}
                  </span>
                </a>
                <a
                  href="https://fe-shelter.vercel.app/"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.refugio
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('refugio')}
                >
                  <img
                    src={deploy}
                    alt=""
                    className={`${
                      estaSobreImagen.refugio
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    Deploy
                  </span>
                </a>
              </div>
            </figcaption>
          </figure>
        </li>
        {/* ///////////////////////////////////////////////////// */}
        <li className="relative box-border flex  h-[275.69px] w-[588px] items-center justify-center overflow-hidden rounded-lg bg-[#ffffff00] p-[10px]">
          <figure className="m-0 flex w-full items-center justify-center">
            <img
              src={food}
              alt="food"
              className={`absolute left-0 top-0 h-full w-full rounded-[8px] object-cover transition-all duration-1000 ${
                estaSobreImagen.food && 'hover:z-10'
              } ${estaSobreImagen.food && 'opacity-80'} ${
                estaSobreImagen.food && 'scale-[1.2]'
              } ${estaSobreImagen.food && 'blur-[2px]'}`}
              onMouseEnter={() => manejarMouseSobreImagen('food')}
              onMouseLeave={() => manejarMouseFueraImagen('food')}
            />
            <figcaption
              className={`${
                estaSobreImagen.food ? 'w-full' : 'invisible'
              } flex flex-col items-center justify-center gap-4`}
            >
              <div
                className={`${
                  estaSobreImagen.food ? 'z-20' : 'invisible'
                } flex h-[10rem] w-[25rem] flex-col items-center justify-center gap-3 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('food')}
              >
                <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
                  Delicious Recipes
                </h4>
                <div>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem]">{t('display_4.area')}</b>Full Stack
                  </p>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem]">{t('display_4.tecno')}</b>Express,
                    Sequelize, Postgresql, React, Redux, CSS Module
                  </p>
                </div>
                <p className="text-[0.75rem] text-[#FFFFFFFF]">
                  {t('display_4.more_details')}
                </p>
              </div>
              <div
                className={`${
                  estaSobreImagen.food ? 'z-20' : 'invisible'
                } flex w-[25rem] flex-row items-center justify-around gap-10 rounded-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('food')}
              >
                <a
                  href="https://github.com/Estani02/PI-Food"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.food
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('food')}
                >
                  <img
                    src={github}
                    alt=""
                    className={`${
                      estaSobreImagen.food
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    {t('display_4.repo')}
                  </span>
                </a>
                <a
                  href="https://deliciousrecipes-pi.surge.sh/"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.food
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('food')}
                >
                  <img
                    src={deploy}
                    alt=""
                    className={`${
                      estaSobreImagen.food
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    Deploy
                  </span>
                </a>
              </div>
            </figcaption>
          </figure>
        </li>
        {/* ///////////////////////////////////////////////////// */}
        <li className="relative box-border flex  h-[275.69px] w-[588px] items-center justify-center overflow-hidden rounded-lg bg-[#ffffff00] p-[10px]">
          <figure className="m-0 flex w-full items-center justify-center">
            <img
              src={movie}
              alt="movie"
              className={`absolute left-0 top-0 h-full w-full rounded-[8px] object-cover transition-all duration-1000  ${
                estaSobreImagen.movie && 'hover:z-10'
              } ${estaSobreImagen.movie && 'opacity-90'} ${
                estaSobreImagen.movie && 'scale-[1.2]'
              } ${estaSobreImagen.movie && 'blur-[2px]'}`}
              onMouseEnter={() => manejarMouseSobreImagen('movie')}
              onMouseLeave={() => manejarMouseFueraImagen('movie')}
            />
            <figcaption
              className={`${
                estaSobreImagen.movie ? 'w-full' : 'invisible'
              } flex flex-col items-center justify-center gap-4`}
            >
              <div
                className={`${
                  estaSobreImagen.movie ? 'z-20' : 'invisible'
                } flex h-[10rem] w-[25rem] flex-col items-center justify-center gap-3 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('movie')}
              >
                <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
                  Movie App
                </h4>
                <div>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem] text-[#FFFFFFFF]">
                    {t('display_4.area')}
                    </b>
                    FrontEnd
                  </p>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem] text-[#FFFFFFFF]">
                      {t('display_4.tecno')}
                    </b>
                    React, Redux, CCS Module
                  </p>
                </div>
                <p className="text-[0.75rem] text-[#FFFFFFFF]">
                  {t('display_4.more_details')}
                </p>
              </div>
              <div
                className={`${
                  estaSobreImagen.movie ? 'z-20' : 'invisible'
                } flex w-[25rem] flex-row items-center justify-around gap-10 rounded-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('movie')}
              >
                <a
                  href="https://github.com/Estani02/Movie-App"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.movie
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('movie')}
                >
                  <img
                    src={github}
                    alt=""
                    className={`${
                      estaSobreImagen.movie
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    {t('display_4.repo')}
                  </span>
                </a>
                <a
                  href="https://loquacious-fudge-f8bf0f.netlify.app/"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.movie
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('movie')}
                >
                  <img
                    src={deploy}
                    alt=""
                    className={`${
                      estaSobreImagen.movie
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    Deploy
                  </span>
                </a>
              </div>
            </figcaption>
          </figure>
        </li>
        {/* ///////////////////////////////////////////////////// */}
        <li className="relative box-border flex  h-[275.69px] w-[588px] items-center justify-center overflow-hidden rounded-lg bg-[#ffffff00] p-[10px]">
          <figure className="m-0 flex w-full items-center justify-center">
            <img
              src={clima}
              alt="clima"
              className={`absolute left-0 top-0 h-full w-full rounded-[8px] object-cover transition-all duration-1000  ${
                estaSobreImagen.clima && 'hover:z-10'
              } ${estaSobreImagen.clima && 'opacity-80'} ${
                estaSobreImagen.clima && 'scale-[1.2]'
              } ${estaSobreImagen.clima && 'blur-[2px]'}`}
              onMouseEnter={() => manejarMouseSobreImagen('clima')}
              onMouseLeave={() => manejarMouseFueraImagen('clima')}
            />
            <figcaption
              className={`${
                estaSobreImagen.clima ? 'w-full' : 'invisible'
              } flex flex-col items-center justify-center gap-4`}
            >
              <div
                className={`${
                  estaSobreImagen.clima ? 'z-20' : 'invisible'
                } flex h-[10rem] w-[25rem] flex-col items-center justify-center gap-3 rounded-lg bg-[#8080804f] p-2 backdrop-blur-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('clima')}
              >
                <h4 className="border-b-2 border-solid border-white text-[1.5rem] font-bold text-[#FFFFFFFF]">
                  Weather App
                </h4>
                <div>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem]">{t('display_4.area')}</b>FrontEnd
                  </p>
                  <p className="text-[0.75rem] text-[#FFFFFFFF]">
                    <b className="text-[1rem]">{t('display_4.tecno')}</b>React, CSS
                  </p>
                </div>
                <p className="text-[0.75rem] text-[#FFFFFFFF]">
                  {t('display_4.more_details')}
                </p>
              </div>
              <div
                className={`${
                  estaSobreImagen.clima ? 'z-20' : 'invisible'
                } flex w-[25rem] flex-row items-center justify-around gap-10 rounded-lg`}
                onMouseEnter={() => manejarMouseSobreImagen('clima')}
              >
                <a
                  href="https://github.com/Estani02/Weather-App"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.clima
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('clima')}
                >
                  <img
                    src={github}
                    alt=""
                    className={`${
                      estaSobreImagen.clima
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    {t('display_4.repo')}
                  </span>
                </a>
                <a
                  href="https://weather-app-olemdo.surge.sh/"
                  target=" _blank"
                  className={`${
                    estaSobreImagen.clima
                      ? 'z-20 bg-[#8080804f] backdrop-blur-lg'
                      : 'invisible'
                  } flex w-[10rem] flex-row items-center justify-center rounded-lg py-2 group`}
                  onMouseEnter={() => manejarMouseSobreImagen('clima')}
                >
                  <img
                    src={deploy}
                    alt=""
                    className={`${
                      estaSobreImagen.clima
                        ? 'h-[30px] scale-100 opacity-100'
                        : 'h-[0px] scale-90 opacity-0'
                    } transition-all duration-500 ease-out`}
                  />
                  <span className="ml-[4px] font-semibold text-[#FFFFFFFF] group-hover:text-[#147CE5] transition-colors duration-500">
                    Deploy
                  </span>
                </a>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
      <CardsResponsive />
    </section>
  );
};
