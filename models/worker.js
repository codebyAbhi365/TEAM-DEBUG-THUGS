const express=require(`express`)

// const mongopass=ahcREmAWmQyB9XR4;
// const newmongopass=useradmin123;


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

const workermodel = mongoose.model(`Worker`,schema)

module.exports = workermodel;