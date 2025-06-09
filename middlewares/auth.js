// const {getUser} = require("../service/auth")
// const sessionIdToUserMap = new Map();

// async function restrictToLoginUserOnly(req, res, next){
//     // const userUid = req.cookies?.uid;
//     // console.log(userUid);
//     const userUid = req.cookies?.uid;
//     const userId = req.cookies?.id;  // Get MongoDB user ID as well
//     console.log("User UID (Session ID):", userUid);
//     console.log("MongoDB User ID:", userId);
//     console.log("Session Map:", sessionIdToUserMap);

//     if(!userUid) return res.redirect("/login");

//     const user = await getUser(userUid);
//     if(!user) return res.redirect("/login");

//     req.user = user;
//     next();
// }

// module.exports = {
//     restrictToLoginUserOnly,
// }