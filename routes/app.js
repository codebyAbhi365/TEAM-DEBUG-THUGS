const express = require('express')
const appRouter = express.Router()
const {Mainpage,filecomplain,showProfile} = require("../controller/app")

const complaindata=require(`../models/complain`)

appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})

appRouter.get('/workhome', async (req, res) => {

    const complaints = await complaindata.find();
    
// { complaints })
    res.render('workerhome',{complaints}); 
});

// appRouter.get('/profile', (req, res)=>{
//     res.render("profile.ejs");
// })
appRouter.get("/profile", showProfile); 

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

appRouter.post('fillcomplain',filecomplain)

appRouter.get("/", (req, res)=>{
    return res.render("homepage");
})
    

module.exports = appRouter;

