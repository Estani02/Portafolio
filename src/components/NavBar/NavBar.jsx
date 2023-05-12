/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import mexico from '../../imag/mexico.svg';
import usa from '../../imag/eeuu.svg';
// import { Display1 } from '../home/Display1';

export default function NavBar() {
  const [section, setSection] = useState('');
  const [navResponsive, setNavResponsive] = useState(false);
  const [english, setEnglish] = useState(false);
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    const handleScroll = () => {
      // const Dsiplay1 = document.getElementById('Home');
      // const Dsiplay2 = document.getElementById('About');
      // const Dsiplay3 = document.getElementById('Service');
      // const Dsiplay4 = document.getElementById('Projects');
      // const Dsiplay5 = document.getElementById('Contact');

      // const Dsiplay1Pos = Dsiplay1.offsetTop;
      // const Dsiplay2Pos = Dsiplay2.offsetTop;
      // const Dsiplay3Pos = Dsiplay3.offsetTop;
      // const Dsiplay4Pos = Dsiplay4.offsetTop;
      // const Dsiplay5Pos = Dsiplay5.offsetTop;

      const currentPosition = window.pageYOffset;

      if (currentPosition >= 0 && currentPosition < 500) {
        setSection('Home');
      } else if (currentPosition >= 500 && currentPosition < 900) {
        setSection('About');
      } else if (currentPosition >= 900 && currentPosition < 2100) {
        setSection('Service');
      } else if (currentPosition >= 2100 && currentPosition < 2800) {
        setSection('Projects');
      } else if (currentPosition >= 2800) {
        setSection('Contact');
      } else {
        setSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  function handleChange() {
    setNavResponsive(!navResponsive);
  }

  function handleLanguage () {
    setEnglish(!english);
    if(english) {
      i18n.changeLanguage("es")
    }
    if(!english) {
      i18n.changeLanguage("en")
    }
  };
  
  return (
    <nav className="fixed inset-x-0 top-0 z-[99999] w-screen bg-[#000000d1] p-[10px] text-[#71787B] backdrop-blur-lg md:flex md:w-full md:justify-center">
      <div class="mx-auto flex max-w-screen-xl flex-col items-center justify-between md:w-full md:flex-row">
        <div className="flex w-full flex-row justify-between px-2 md:w-auto md:px-0">
          <a
            href="#Home"
            className="text-[1.7em] font-semibold text-[#ffffff98] no-underline transition-colors duration-500 hover:text-[#ffffff]"
          >
            <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              &lt;EO/&gt;
            </span>
          </a>
          <div className="flex flex-row">
          <div class="flex items-end md:hidden">
          <button
            type="button"
            class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 w-[140px] gap-2 text-sm font-medium text-[#676c67] focus:text-white transition-colors duration-300"
            onClick={handleLanguage}
          >
            <img src={usa} alt="" hidden />
            <img src={mexico} alt="" hidden />
            <img src={!english ? mexico : usa} alt="flag languages" />
            <p className="md:block">{!english ? 'Español (MX)' : 'English (US)'}</p>
          </button>
        </div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-600 dark:text-gray-400 dark:focus:ring-gray-600 md:hidden transition-all duration-300"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleChange}
            >
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="md:flex items-center md:order-2 hidden">
          <button
            type="button"
            class="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 w-[140px] gap-2 text-sm font-medium text-[#676c67] transition-colors duration-500 md:hover:text-[#ffffff98]"
            onClick={handleLanguage}
          >
            <img src={!english ? mexico : usa} alt="flag languages" />
            <p className="hidden md:block">{!english ? 'Español (MX)' : 'English (US)'}</p>
          </button>
        </div>
        <div
          class={`${
            !navResponsive && 'hidden'
          } md:w-auto" id="navbar-default mt-1 w-full rounded-lg bg-[#00000068] md:block md:bg-transparent`}
        >
          <ul className="flex flex-col font-medium md:ml-[22px] md:flex-row md:items-center md:justify-center md:gap-[2.5rem] md:bg-transparent">
            <li>
              <a
                href="#Home"
                className={`${
                  section === 'Home' ? 'text-[#ffffff]' : ''
                } block rounded py-2 pl-3 pr-4 font-normal text-[#676c67] transition-colors duration-500 md:bg-transparent md:no-underline md:hover:text-[#ffffff98]`}
                onClick={handleChange}
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a
                href="#About"
                className={`${
                  section === 'About' ? 'text-[#ffffff]' : ''
                } block whitespace-nowrap rounded py-2 pl-3 pr-4 font-normal text-[#676c67] transition-colors duration-500 md:bg-transparent md:no-underline md:hover:text-[#ffffff98]`}
                onClick={handleChange}
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a
                href="#Service"
                className={`${
                  section === 'Service' ? 'text-[#ffffff]' : ''
                } block rounded py-2 pl-3 pr-4 font-normal text-[#676c67] transition-colors duration-500 md:bg-transparent md:no-underline md:hover:text-[#ffffff98]`}
                onClick={handleChange}
              >
                {t('nav.service')}
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className={`${
                  section === 'Projects' ? 'text-[#ffffff]' : ''
                } block rounded py-2 pl-3 pr-4 font-normal text-[#676c67] transition-colors duration-500 md:bg-transparent md:no-underline md:hover:text-[#ffffff98]`}
                onClick={handleChange}
              >
                {t('nav.projects')}
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className={`${
                  section === 'Contact' ? 'text-[#ffffff]' : ''
                } block rounded py-2 pl-3 pr-4 font-normal text-[#676c67] transition-colors duration-500 md:bg-transparent md:no-underline md:hover:text-[#ffffff98]`}
                onClick={handleChange}
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
