'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'


import React, { useState } from 'react'

const page = () => {
    const [image,setImage]=useState(false)
  return (
    <>
      <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Add Thumbnail</p>
        <label htmlFor='image'>
            <Image className='mt-4' src={!image?assets.upload_area:URL.createObjectURL(image)} width={140} height={20} alt=''/>
        </label>
        <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required/>

        <p className='text-xl mt-4 '>Title</p>
        <input className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='add title'/>

        <p className='text-xl mt-4 '>Desciption</p>
        <textArea className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type='text' placeholder='Write content here'/>
        <p className='text-xl mt-4'>Blog Category</p>
        <select name='category' className='w-40 mt-4 px-4 py-3 border text-gray-600'>
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
        </select>
        <br/>
        <button className='bg-black text-white mt-4 w-40 h-12' type='submit'>Add</button>
      </form>
    </>
  )
}

export default page
