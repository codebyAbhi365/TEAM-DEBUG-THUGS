const complaindata = require("../models/complain");
const User = require("../models/worker");
const { getUser } = require("../service/auth");
const mongoose = require("mongoose");
const Accepted = require("../models/request");

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

async function requestAccept(req, res) {
    try {
        const userId = req.cookies?.id;  // Get user ID from cookies
        const complainId = req.body.id;  // Get complaint ID from request body
        console.log(complainId)

        if (!userId) return res.status(400).send("User ID is required!");
        if (!complainId) return res.status(400).send("Complaint ID is required!");

        // Check if the complaint exists
        const complain = await complaindata.findById(complainId);
        if (!complain) return res.status(404).send("Complaint not found!");

        // Check if the worker has already accepted a complaint
        let accepted = await Accepted.findOne({ userId });

        if (!accepted) {
            // Create a new entry if the user has no accepted complaints
            accepted = new Accepted({ userId, complains: [complainId] });
            await accepted.save();
        } else {
            // Check if the complaint is already accepted
            if (accepted.complains.includes(complainId)) {
                return res.redirect("/home/submission");
            }
            accepted.complains.push(complainId);
            await accepted.save();
        }

        return res.redirect("/home/submission"); // Redirect after accepting the request
    } catch (error) {
        console.error("Error accepting request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

async function showRequest(req, res) {
    try {
        const userId = req.cookies?.id;  // Get the user ID from cookies
        if (!userId) return res.status(400).send("User not authenticated");

        // Find accepted complaints for the logged-in user and populate the complains field
        const acceptedData = await Accepted.findOne({ userId }).populate("complains");

        res.render("submission.ejs", { accepted: acceptedData ? acceptedData.complains : [] });

    } catch (error) {
        console.error("Error fetching accepted complaints:", error);
        res.status(500).send("Internal Server Error");
    }
}




module.exports = {
   showProfile,showRequest,requestAccept
   
} 
    // showProfile,filecomplain,
 
//  Mainpage,
// ,filecomplain,
