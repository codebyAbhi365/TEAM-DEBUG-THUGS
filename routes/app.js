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

appRouter.post("/accepted/:id", requestAccept);  // Accept a complaint

appRouter.get("/submission", showRequest);  // Show all accepted complaints

// appRouter.get("/" ,Mainpage);
// appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})






appRouter.get('/', async (req, res) => {
    const complaints = await complaindata.find({ status: 'approved' });
    
    res.render('workerhome_2.ejs',{complaints}); 
});



appRouter.get("/profile", showProfile); 

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

// appRouter.post('fillcomplain',filecomplain)



    
module.exports = appRouter;

