const express=require(`express`)

const PORT=8000

const app=express()

const mongoose=require(`mongoose`);
const { log } = require("node:console");


// const mongopass=ahcREmAWmQyB9XR4;
// const newmongopass=useradmin123;


mongoose.connect(`mongodb+srv://admin121:useradmin123@cluster0.1rhazaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)



const schema=mongoose.Schema({
    Name:{
         type:String,
         required:true
    },
    Email:{
        type:String,
        required:true
    },
    Pass:{
      type:String,
      required:true
    },
    PhnNo:{
        type:Number,
        required:true
    }
})

const workermodel=mongoose.model(`Worker`,schema)

app.use

app.listen(PORT,()=>{
    console.log(`Server is live on ${PORT}`);
    
})