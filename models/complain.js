const express=require(`express`)

const mongoose=require(`mongoose`)

const cschema=mongoose.Schema({
   Name:{
    type:String,
    required:false
   },
   Location:{
    type:String,
    required:false
   },
   Image:{
    type:String,
    required:false
   }

})


const complainmodel=mongoose.model(`complain`,cschema);

module.exports=complainmodel