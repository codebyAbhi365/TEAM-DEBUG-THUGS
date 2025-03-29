const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;
const User = require("./models/worker")

const router=require(`./routes/user`)
const appRouter = require("./routes/app")
const {restrictToLoginUserOnly} = require("./middlewares/auth")

//Connecting MongoDb
const ConnectTOMongoDB = require("./connections");
ConnectTOMongoDB();

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));
//  ,restrictToLoginUserOnly,
//setting up veiw engine as ejs
app.set("view engine" , "ejs");
app.set("views" , path.resolve("views"));

// Middleware to Fetch User from UID in Cookie
app.use(async (req, res, next) => {
    try {
        const uid = req.cookies?.id;
        console.log(uid);
        if (uid) {
            const user = await User.findById(uid) // Find user by UID
            res.locals.user = user || null; // Store user in res.locals
        } else {
            res.locals.user = null;
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        res.locals.user = null;
    }
    next();
});

app.use("/home", appRouter);
app.use("/" , router);

app.get(`/homepage`,(req,res)=>{
    res.render(`homepage`)
})

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
});