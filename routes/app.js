const express = require('express')
const appRouter = express.Router()
const {Mainpage,filecomplain} = require("../controller/app")

appRouter.get("/" ,Mainpage);
appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form`)
})



// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

appRouter.post('fillcomplain',filecomplain)
    

module.exports = appRouter;

