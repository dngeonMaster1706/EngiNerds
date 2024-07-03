import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogItems from './BlogItems'

const BlogList = () => {

  const [menu,setMenu]=useState("All")
  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('All')}  className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""} >Technology</button>
        <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""} >Startup</button>
        <button onClick={()=>setMenu('Crypto')} className={menu==="Crypto"?'bg-black text-white py-1 px-4 rounded-sm':""} >Crypto</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data.filter((item)=>menu==="All"?true:item.category===menu).map((item,index)=>{
            return<BlogItems key={index} id={item.id} image={item.image} title={item.title} category={item.category} description={item.description}/>
        })}
      </div>
    </div>
  )
}

export default BlogList