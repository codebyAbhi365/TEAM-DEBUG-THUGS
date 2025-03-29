const express = require('express')
const appRouter = express.Router()
const {Mainpage,filecomplain,showProfile} = require("../controller/app")

appRouter.get("/" ,Mainpage);
appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})

appRouter.get(`/workhome`,(req,res)=>{
    res.render(`workerhome`)
})

// appRouter.get('/profile', (req, res)=>{
//     res.render("profile.ejs");
// })
appRouter.get("/profile", showProfile); 

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

appRouter.post('fillcomplain',filecomplain)
    

module.exports = appRouter;

