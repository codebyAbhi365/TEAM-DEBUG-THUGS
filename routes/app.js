const express = require('express')
const appRouter = express.Router()
const {showProfile,requestAccept,showRequest} = require("../controller/app")
// filecomplain,
const complaindata=require(`../models/complain`)
const path=require(`path`)
// Mainpage
const maplocation=require(`../models/complain`)
// const {filecomplain}=require("../controller/app")

const multer=require(`multer`)

appRouter.post("/submission", requestAccept);  // Accept a complaint

appRouter.get("/submission", showRequest);  // Show all accepted complaints

// appRouter.get("/" ,Mainpage);
// appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})


appRouter.get('/workhome', async (req, res) => {
    const complaints = await complaindata.find();
    
    // const complaints = await complaindata.find();
    // console.log(complaints);

    // const location=await maplocation.find(Location);
    // console.log(location);
    
    
    // { complaints })
    res.render('workerhome',{complaints}); 
});


appRouter.get("/profile", showProfile); 

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

// appRouter.post('fillcomplain',filecomplain)

appRouter.get("/", (req, res)=>{
    return res.render("homepage");
})
    
module.exports = appRouter;

