const complaindata = require("../models/complain")
async function createUser(req, res){
    const {Name,Location,Image}=req.body
    complaindata.create({
        Name,
        Location,
        Image,
    
    })
    console.log(Name);
    res.redirect(`/home`)
}







module.exports = {
    createUser,
}