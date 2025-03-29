const express = require('express')
const router = express.Router()

const {createUser,loginUser} = require("../controller/user")

router.get('/signup',(req,res) => {
    res.render("signup")
})

router.get('/login' , (req, res)=>{
    res.render("login")
})


router.post(`/signup`,createUser)
router.post("/login",loginUser )

module.exports = router;