const complaindata = require("../models/complain");
const User = require("../models/worker");
const { getUser } = require("../service/auth");
const Accepted = require("../models/Accepted"); // Import the Accepted model

<<<<<<< HEAD
async function filecomplain(req, res) {
    try {
        const { Name, Location, Image } = req.body; // Fixed destructuring
        await complaindata.create({ Name, Location, Image });
        res.redirect(`/homepage`);
    } catch (error) {
        console.error("Error filing complaint:", error);
        res.status(500).send("Internal Server Error");
    }
}
=======
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
>>>>>>> a52740825fe61ba36167396ee22181076850724f

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
<<<<<<< HEAD
    showProfile,
    filecomplain,
};
=======
   showProfile
   
} 
    // showProfile,filecomplain,
 
//  Mainpage,
// ,filecomplain,
>>>>>>> a52740825fe61ba36167396ee22181076850724f
