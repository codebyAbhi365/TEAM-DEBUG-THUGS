const express = require('express')
const router = express.Router()

router.get('/signup',(req,res) => {
    res.render("signup")
})

router.get('/login' , (req, res)=>{
    res.render("login")
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