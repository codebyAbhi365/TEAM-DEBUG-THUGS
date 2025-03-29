const express=require(`express`)

const router=express.Router()

router.get(`/worker`,(req,res)=>{
    res.render(`signup`)
})

modules.exports=router