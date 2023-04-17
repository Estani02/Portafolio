import React from 'react';
import dev from '../../../imag/dev.svg';
import maintenance from '../../../imag/mainten.svg';
import performance from '../../../imag/perfoma.svg';
import web from '../../../imag/web.svg';
import seo from '../../../imag/seo.svg';
import crative from '../../../imag/creative.svg';
import { useTranslation } from 'react-i18next';

export const Display3 = () => {
  const [t] = useTranslation("global");


  return (
    <section className='md:mt-[5.3rem] p-3 md:p-0' id='Service'>
      <div className='flex flex-col gap-4 md:ml-[5rem] md:mb-12'>
        <h2 className='text-[2rem] md:text-[2.25rem] font-bold'>{t('display_3.h2')}</h2>
        <h4 className='text-[1.25rem] md:text-[1.5rem] font-semibold'>{t('display_3.h4')}</h4>
      </div>
      <div className="flec w-full flex-col">
        <div className="grid grid-rows-6 md:grid-cols-3 md:grid-rows-2 gap-8 justify-items-center">
          <div className="flex flex-col items-center justify-center w-[20.438rem]">
            <img src={dev} alt="" className='h-[40px] md:h-auto' />
            <span className="text-[1.25rem] md:text-[1.5rem] font-medium">{t('display_3.Development.titile')}</span>
            <p className="text-center">
            {t('display_3.Development.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[20.438rem]">
            <img src={maintenance} alt="" className='h-[40px] md:h-auto' />
            <span className="text-[1.25rem] md:text-[1.5rem] font-medium">{t('display_3.Maintenance.titile')}</span>
            <p className="text-center">
            {t('display_3.Maintenance.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[20.438rem]">
            <img src={seo} alt="" className='h-[40px] md:h-auto' />
            <span className="text-[1.25rem] md:text-[1.5rem] font-medium">SEO</span>
            <p className="text-center">
            {t('display_3.SEO.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[20.438rem]">
            <img src={web} alt="" className='h-[40px] md:h-auto' />
            <span className="text-[1.25rem] md:text-[1.5rem] font-medium whitespace-nowrap">
            {t('display_3.Web_Application.titile')}
            </span>
            <p className="text-center">
            {t('display_3.Web_Application.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[20.438rem]">
            <img src={performance} alt="" className='h-[40px] md:h-auto' />
            <span className="text-[1.25rem] md:text-[1.5rem] font-medium">{t('display_3.Performance.titile')}</span>
            <p className="text-center">
            {t('display_3.Performance.description')}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[20.438rem]">
            <img src={crative} alt="" className='h-[40px] md:h-auto' />
            <span className="text-[1.25rem] md:text-[1.5rem] font-medium">{t('display_3.Creative_Design.titile')}</span>
            <p className="text-center">
            {t('display_3.Creative_Design.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
