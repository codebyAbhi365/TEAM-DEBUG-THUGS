const mongoose = require("mongoose");

const Schema = mongoose.Schema({
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
});

const Public = mongoose.model("publicmodel", Schema);
module.exports = Public;
