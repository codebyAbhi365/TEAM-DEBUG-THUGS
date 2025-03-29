const complaindata = require("../models/complain")
const User = require("../models/worker")
const {getUser} = require("../service/auth");

async function filecomplain (req, res){
    const {Name,Location,Image}=await req.body
    complaindata.create({
        Name,
        Location,
        Image,
    
    })
    // console.log(Name);
    res.redirect(`/homepage`)
}

async function showProfile(req, res){ 
    const userUid = req.cookies?.uid;
    if(!userUid) return res.redirect("/login");

    const user = getUser(userUid);
    if(!user) return res.redirect("/login");
    req.user = user;
    return res.render("profile" , {user});

}

// async function Mainpage(req, res) {
//     res.render("home.ejs");
// }

module.exports = {
<<<<<<< HEAD
   showProfile,filecomplain,
=======
    showProfile,filecomplain,
>>>>>>> 63de62e76f63c83a80d29ff6e47209d1ac09364b
} 
//  Mainpage,
// 