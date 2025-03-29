const express = require(`express`)
const mongoose = require("mongoose")
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

const Worker = mongoose.model(`workermodel`,schema)

module.exports = Worker;