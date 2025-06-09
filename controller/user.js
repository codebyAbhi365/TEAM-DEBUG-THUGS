const { v4: uuidv4 } = require('uuid');
const Worker = require("../models/worker")
const bcrypt = require("bcrypt");
const { setUser, getUser, sessionIdToUserMap } = require("../service/auth");



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
    return res.redirect(`/home`);
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
    const userId = user._id;

    const sessionId = uuidv4();
    res.cookie("uid", sessionId);
    res.cookie("id", userId.toString())
    console.log(userId.toString())
    setUser(sessionId, user);
    // console.log("Setting User in Map:", sessionId, user);
    // console.log("Session Map After setUser:", sessionIdToUserMap);


    return res.redirect("/home");
}

async function LoginAdmin(req, res){
    const {Email, Pass} = req.body;
    if(Email=="rohit.kadam242@vit.edu" && Pass == "rk"){
        return res.redirect('/admin')
    }
}

module.exports = {
    createUser,
    loginUser,LoginAdmin,
}