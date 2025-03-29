const {getUser} = require("../service/auth")

async function restrictToLoginUserOnly(req, res, next){
    const userUid = req.cookies?.uid;
    console.log(userUid);
    if(!userUid) return res.redirect("/login");

    const user = getUser(userUid);
    console.log(user);
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

module.exports = {
    restrictToLoginUserOnly,
}