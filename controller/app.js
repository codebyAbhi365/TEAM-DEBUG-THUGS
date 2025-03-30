const complaindata = require("../models/complain");
const User = require("../models/worker");
const { getUser } = require("../service/auth");
// const Accepted = require("../models/Accepted"); // Import the Accepted model

// async function filecomplain (req, res){
//     const {Name,Location,Image}=await req.body
//     await complaindata.create({
//         Name:Name,
//         Location:Location,
//         Image:Image,
    
//     })
//     console.log(Name);
//     res.redirect(`/homepage`)
// }

// Function to show user profile
async function showProfile(req, res) {
    try {
        const userUid = req.cookies?.uid;
        if (!userUid) return res.redirect("/login");

        
        const user = getUser(userUid);
        if (!user) return res.redirect("/login");

        req.user = user;
        res.render("profile", { user });
    } catch (error) {
        console.error("Error loading profile:", error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = {
   showProfile
   
} 
    // showProfile,filecomplain,
 
//  Mainpage,
// ,filecomplain,
