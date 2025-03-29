const express = require('express')
const appRouter = express.Router()
const {Mainpage,filecomplain} = require("../controller/app")

const complaindata=require(`../models/complain`)

appRouter.get("/" ,Mainpage);
appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})

appRouter.get('/workhome', async (req, res) => {

    const complaints = await complaindata.find();
    console.log(complaints);
    
// { complaints })
    res.render('workerhome',{complaints}); 
});

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

appRouter.post('fillcomplain',filecomplain)
    

module.exports = appRouter;

