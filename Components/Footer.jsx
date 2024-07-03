import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <Image src={assets.logo_light} alt='' width={120}/>
      <p className='text-md text-white'>Developed and Maintained by @kaushik</p>

    </div>
  )
}

export default Footer
