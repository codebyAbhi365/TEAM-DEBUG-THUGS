const complaindata = require("../models/complain");
const User = require("../models/worker");
const { getUser } = require("../service/auth");
const Accepted = require("../models/Accepted"); // Import the Accepted model

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
    showProfile,
    filecomplain,
};
