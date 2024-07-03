import mongoose from "mongoose";

const Schema=new mongoose.Schema({
    title:{
        type:string,
        required:true,
    },
    description:{
        type:string,
        required:true,
    },
    author:{
        category:string,
        required:true,
    },
    image:{
        type:string,
        required:true,
    },
    authorImg:{
        type:string,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const BlogModel=mongoose.models.blog||mongoose.model('blog',Schema)