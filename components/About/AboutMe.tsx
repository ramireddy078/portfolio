import React from 'react';
import AboutContent from './AboutContent';
import HeroImage from '../Hero/HeroImage';

const AboutMe = () => {
  return (
    <div className='w-full h-fit mt-28 bg-green-500.'>
      <div className='flex justify-center flex-col w-[80%] h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12'>
            <AboutContent />
            <div className='-mt-28 md:hidden lg:block'>
                <HeroImage />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
