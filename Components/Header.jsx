import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
            Get Started <Image src={assets.arrow}/>
            </button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Let's Explore</h1>

            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>
            Welcome to EngiNerds, your ultimate destination for all things engineering! Whether you're a seasoned professional, a curious student, or simply someone with a passion for the intricacies of the engineering world, you'll find a wealth of articles, insights, and resources to fuel your curiosity and expand your knowledge. Dive into expertly crafted content that covers a wide range of engineering subjects, from the fundamentals to the latest innovations. Join our community of like-minded individuals and embark on a journey of discovery, learning, and inspiration. Welcome to Enginerd Digest, where engineering meets passion!
            </p>

            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' >
                <input type='email' placeholder='enter your email' className='pl-4 outline-none'/>
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>

            </form>
        </div>
    </div>
  )
}

export default Header
