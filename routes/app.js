const express = require('express')
const appRouter = express.Router()

const {Mainpage} = require("../controller/app")

appRouter.get("/" ,Mainpage);

const {filecomplain}=require("../controller/app")


router.get('/complain',(req,res)=>{
    res.render(`form`)
    })

    router.post('fillcomplain',filecomplain)
    

module.exports = appRouter;

