const express = require('express')
const appRouter = express.Router()
const {Mainpage,filecomplain} = require("../controller/app")

appRouter.get("/" ,Mainpage);
appRouter.post(`/filecomplain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form`)
})

module.exports = appRouter;