import AboutMe from '@/components/About/AboutMe'
import Experience from '@/components/Experience/Experience'
import React from 'react'

const page = () => {
  return (
    <div className='py-[15vh] space-y-14'>
      <AboutMe />
      <Experience />
    </div>
  )
}

export default page
