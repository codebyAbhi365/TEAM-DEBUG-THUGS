const express = require('express')
const router = express.Router()

const {createUser,loginUser,LoginAdmin} = require("../controller/user")

router.get('/signup',(req,res) => {
    res.render("signup")
})

router.get('/login' , (req, res)=>{
    res.render("login")
})

router.get('/loginAsAdmin' , (req, res)=>{
    res.render("loginAsAdmin")
})

router.post('/loginAdmin',LoginAdmin);


router.post(`/signup`,createUser)
router.post("/login",loginUser )

module.exports = router;