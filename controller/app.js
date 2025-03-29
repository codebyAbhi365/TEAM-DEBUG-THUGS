const complaindata = require("../models/complain")
const User = require("../models/worker")

async function file(req, res){
    const {Name,Location,Image}=req.body
    complaindata.create({
        Name,
        Location,
        Image,
    
    })
    console.log(Name);
    res.redirect(`/home`)
}

async function showProfile(req, res){
    res.render("profile.ejs", {User});
}

async function Mainpage(req, res) {
    res.redirect("/home");
}

module.exports = {
    Mainpage, creatUser
}