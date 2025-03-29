const express = require('express')
const router = express.Router()

const {createUser,loginUser} = require("../controller/user")

const {filecomplain}=require("../controller/app")

router.get('/signup',(req,res) => {
    res.render("signup")
})

router.get('/login' , (req, res)=>{
    res.render("login")
})

router.post(`/signup`,createUser)
router.post("/login",loginUser )

// router.get('/complain',(req,res)=>{
// res.render(`form`)
// })

// router.post(`/filecomplain`, filecomplain)
module.exports = router;