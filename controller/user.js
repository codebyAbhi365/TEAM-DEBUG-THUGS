const { v4: uuidv4 } = require('uuid');
const {setUser, getUser} = require("../service/auth")
const Worker = require("../models/worker")

async function createUser(req, res){
    const {Name,Email,PhnNo,Pass}=req.body;
    Worker.create({
        Name,
        Email,
        PhnNo,
        Pass
    });
    console.log(Name);
    res.redirect(`/home`);
}

async function loginUser(req, res){
    const {Email, Pass} = req.body;
    const user = await Worker.findOne({Email , Pass});

    if(!user) return res.render("login" , {
        error: "Invalid Password or Username"
    })

    const sessionId = uuidv4();
    res.cookie("uid", sessionId);
    setUser(sessionId, user);

    return res.redirect("/home");
}





module.exports = {
    createUser,loginUser,
}