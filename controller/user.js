const Worker = require("../models/worker")
async function createUser(req, res){
    const {Name,Email,PhnNo,Pass}=req.body
    Worker.create({
        Name,
        Email,
        PhnNo,
        Pass
    })
    console.log(Name);
    res.redirect(`/home`)
}







module.exports = {
    createUser,
}