const complaindata = require("../models/complain")
// async function filecomplain(req, res){
const User = require("../models/worker")

async function filecomplain(req, res){
    const {Name,Location,Image}=req.body
    complaindata.create({
        Name,
        Location,
        Image,
    
    })
    console.log(Name);
    res.redirect(`/home`)
}

// async function showProfile(req, res){
//     res.render("profile.ejs", {User});
// }

async function Mainpage(req, res) {
    res.render("home.ejs");
}

module.exports = {
     filecomplain,Mainpage
}