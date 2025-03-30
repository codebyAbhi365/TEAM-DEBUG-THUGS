const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;
const User = require("./models/worker")
const multer=require(`multer`)
const Accepted = require('./models/request');

const router=require(`./routes/user`)
const appRouter = require("./routes/app")
const {restrictToLoginUserOnly} = require("./middlewares/auth")

const complaindata=require(`./models/complain`)

//Connecting MongoDb
const ConnectTOMongoDB = require("./connections");
ConnectTOMongoDB();

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));
app.use("/uploads", express.static("public/uploads"));
//  ,restrictToLoginUserOnly,
//setting up veiw engine as ejs
app.set("view engine" , "ejs");
app.set("views" , path.resolve("views"));

// Middleware to Fetch User from UID in Cookie
app.use(async (req, res, next) => {
    try {
        const uid = req.cookies?.id;
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
app.post("/home/submission", async (req, res) => {
    try {
        const { id } = req.body;
        
        // Mark the complaint as accepted (update database or move it)
        await Accepted.updateOne(
            { userId: req.cookies.id }, 
            { $push: { complains: id } },
            { upsert: true }
        );

        res.json({ success: true });
    } catch (error) {
        console.error("Error accepting complaint:", error);
        res.json({ success: false });
    }
});

app.use("/home", appRouter);
app.use("/" , router);

app.get(`/homepage`,(req,res)=>{
    res.render(`homepage`)
})

//  const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//           return cb(null, './uploads')
//         },
//         filename: function (req, file, cb) {
    //         //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //           return cb(null, file.fieldname + '-' + file.originalname)
    //         }
    //       })
    
    //       const upload = multer({ storage: storage })
    //



    
    app.get(`/getmap`,(req,res)=>{
        res.render(`map`)
    })

    app.get(`/submit`,(req,res)=>{
        res.render(`submission`)
    })

    app.get(`/reward`,(req,res)=>{
        res.render(`rewards`)
    })



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads"); // Destination folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage: storage });


app.post(`/fillcomplain`, upload.single("Image"),async (req,res)=>{
    const {Name,Location,Image}=await req.body
        complaindata.create({
            Name,
            Location,
            Image:req.file.filename,
        
        })
        console.log(Name);
        console.log(req.file);

    // const {Name,Location,Image}=await req.body
    // complaindata.create({
    //     Name:Name,
    //     Location:Location,
    //     Image:Image,
    
    // })
    // console.log(Name);
    res.redirect(`/homepage`)
})

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
});