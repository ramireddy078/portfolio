import React from 'react'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

function Hero() {
  return (
    <div className='w-full pt-[15vh] md:h-fit lg:h-screen bg-green-500.'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
            <HeroContent />
            <HeroImage />
        </div>
      </div>
    </div>
  )
}

export default Hero
