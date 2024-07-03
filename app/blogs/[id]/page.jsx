'use client'

import { assets, blog_data } from '@/assets/assets';
import Image from 'next/image';
import { useEffect , useState } from 'react'

const page = ({params}) => {

    const [data,setData]=useState(null);

    const fetchBlogData=()=>{
        for(let i = 0 ; i<blog_data.length; i++){
            if(Number(params.id)===blog_data[i].id){
                setData(blog_data[i]);           
                console.log(blog_data[i]);
                
                break;
            }
        }
    }

    useEffect(()=>{
        fetchBlogData();
    },[])
  return (data?
    <>
    <div className='bg-grey-200 py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button  className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started
            <Image src={assets.arrow} alt=''/>
            </button>
        </div>

        <div className='text-center my-24'>
            <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
            <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height={60}/>
            <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
        </div>
    </div>

    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
        <Image src={data.image} width={1280} height={720} alt='' className='border-4 border-black'/>
        <h1 className='my-8 text-[28px] font-semibold'>Introduction</h1>
        <p>{data.description}</p>
 
        <h3 className='my-5 text-[18px] font-semibold'>
        1. Define Your Vision
        </h3>
        <p className='my-3'>
        Every great journey begins with a clear vision. Take some time to reflect on what an exceptional lifestyle means to you. Is it about achieving career success, nurturing meaningful relationships, traveling the world, or perhaps a combination of these? Write down your vision and be as specific as possible. This will serve as your roadmap and guide your decisions moving forward.
        </p>
       
        <p className='my-3'>
        With your vision in place, the next step is to break it down into achievable goals. Set short-term and long-term goals that align with your vision. Remember, these goals should be specific, measurable, attainable, relevant, and time-bound (SMART). For example, if your vision includes becoming a successful entrepreneur, a short-term goal might be to research your business idea and create a business plan within the next three months.
        </p>
                
        <h3 className='my-5 text-[18px] font-semibold'>
        3. Embrace Continuous Learning
        </h3>
        <p className='my-3'>
        An exceptional lifestyle is often characterized by a commitment to lifelong learning. Embrace new experiences, seek out knowledge, and be open to growth. This could mean taking up a new hobby, enrolling in a course, or simply reading more books. The key is to stay curious and never stop learning.
        </p>
        <h3 className='my-5 text-[18px] font-semibold'>
        5. Prioritize Health and Well-being
        </h3>
        <p className='my-3'>
        An exceptional lifestyle is built on a foundation of good health and well-being. Prioritize physical, mental, and emotional health by adopting healthy habits. This includes regular exercise, a balanced diet, adequate sleep, and stress management techniques such as meditation or yoga. Taking care of your health will give you the energy and vitality needed to pursue your goals.
        </p>


    </div>
    </>:<></>
  )
}

export default page
