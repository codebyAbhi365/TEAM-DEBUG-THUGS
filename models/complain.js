const express=require(`express`)

const mongoose=require(`mongoose`)

const cschema=mongoose.Schema({
    Name:{
        required:true,
        type:String
    },
    Location:{
        type:String,
        required:true
    },
    Image:{
        required:true,
        type:String
    }

})


const complainmodel=mongoose.model(`complain`,cschema);

module.exports=complainmodel