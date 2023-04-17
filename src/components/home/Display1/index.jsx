import React, { useEffect, useState } from 'react';
import fotoPerfil from '../../../imag/fotoPerfil.jpg';
import s from './Display1.module.css';
import Typewriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';

export const Display1 = () => {
  const [show, setShow] = useState(false);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative flex h-screen flex-col items-center justify-center" id='Home'>
      <div className={s.background} />
      <picture className={`${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <source
          type="image/webp"
          srcSet={fotoPerfil}
          className="h-[15.625rem] rounded-[50%]"
        />
        <img
          src={fotoPerfil}
          alt="foto de perfil"
          className="h-[15.625rem] rounded-[50%]"
        />
      </picture>
      <div className={`${show ? 'opacity-100 flex flex-row gap-2' : 'opacity-0'} transition-opacity duration-700`}>
        <p className='text-[2rem] md:text-[2.25rem] text-[#FFFFFF] font-bold flex flex-col text-center'>{t('display_1.hello')} <b className='text-[2rem] text-[#147CE5] font-bold md:hidden'>Estanislao Olmedo</b></p>
        <div className='hidden md:block'>
          <Typewriter
            options={{
              strings: ['Estanislao Olmedo', 'Full Stack Developer'],
              autoStart: true,
              loop: true,
              pauseFor: 5000,
              wrapperClassName: s['typewriter-wrapper'],
              cursorClassName: s['typewriter-cursor'],
            }}
          />
        </div>
      </div>
      <p className={`${show ? 'md:text-[1.2rem] mt-[1em] font-semibold text-[#FFFFFF] opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>"{t('display_1.trans')}"</p>
    </section>
  );
};
