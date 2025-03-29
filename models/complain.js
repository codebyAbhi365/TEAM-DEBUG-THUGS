const express=require(`express`)

const mongoose=require(`mongoose`)

const cschema=mongoose.Schema({
   Name:{
    type:String,
    required:true
   },
   Location:{
    type:String,
    required:true
   },
   Image:{
    type:String,
    required:true
   }

})


const complainmodel=mongoose.model(`complain`,cschema);

module.exports=complainmodel