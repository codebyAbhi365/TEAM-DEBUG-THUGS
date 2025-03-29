const express = require('express')
const router = express.Router()

const workermodel=require(`../models/worker`)

router.get('/worker',(req,res) => {
    res.render(`signup`)
})

router.post(`/workerdata`,(req,res)=>{
    const {Name,Email,PhnNo,Pass}=req.body
    workermodel.create({
        Name,
        Email,
        PhnNo,
        Pass

    })

    console.log(Name);
    

    res.redirect(`/worker`)
})



module.exports = router;