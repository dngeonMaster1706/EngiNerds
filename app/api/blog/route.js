const {arrayBuffer, NextResponse } =require("next/server");
import { connectDB } from "@/lib/confiq/db";
import {writeFile} from 'fs/promises'

import BlogModel from "@/lib/models/BlogModel";

const loadDB=async () =>{
    await connectDB();
}

loadDB();


//api endpoints to get all blogs 
export async function GET(request){
    const blodId=request.nextUrl.searchParams.get("id");;

    if(blodId){
        const blog=await BlogModel.findById(blodId);
        return NextResponse.json({blog})
    }else{
        const blogs=await BlogModel.find({});
        return NextResponse.json({blogs})
    }
    
}


//api  end point for uploading blogs
export async function POST(request){

    const formData=await request.formData();
    const timestamp=Date.now();
    const image=formData.get('image');
    //Storing image in public folder
    const imageByteData=await image.arrayBuffer();
    const buffer= Buffer.from(imageByteData);
    const path=`./public/${timestamp}_${image.name}`
    await writeFile(path,buffer);
    const imgUrl=`/${timestamp}_${image.name}`
    
    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imgUrl}`,
        authorImg:`${formData.get('authorImg')}`,
    }

    await BlogModel.create(blogData);
    console.log("Blog saved");
    return NextResponse.json({
        success:true,
        msg:"added"
    })
}

