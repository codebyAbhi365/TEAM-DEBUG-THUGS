const { v4: uuidv4 } = require('uuid');
const {setUser, getUser} = require("../service/auth")
const Worker = require("../models/worker")
const bcrypt = require("bcrypt");

async function createUser(req, res){
    const {Name,Email,PhnNo,Pass}=req.body;

    const existingUser = await Worker.findOne({ Email });
    if (existingUser) {
        return res.render("signup", { error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(Pass, 10);

    await Worker.create({
        Name,
        Email,
        PhnNo,
        Pass: hashedPassword
    });

    console.log(Name);
    res.redirect(`/home`);
}

async function loginUser(req, res){
    const {Email, Pass} = req.body;
    const user = await Worker.findOne({Email});

    if(!user) return res.render("login" , {
        error: "Invalid Password or Username"
    })

    const isMatch = await bcrypt.compare(Pass, user.Pass);
    if (!isMatch) {
        return res.render("login", { error: "Invalid Email or Password" });
    }

    const sessionId = uuidv4();
    res.cookie("uid", sessionId);
    setUser(sessionId, user);
    console.log(sessionId);

    return res.redirect("/home");
}

module.exports = {
    createUser,
    loginUser,
}