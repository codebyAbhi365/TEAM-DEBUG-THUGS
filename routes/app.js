const express = require('express')
const appRouter = express.Router()
const {showProfile} = require("../controller/app")
// filecomplain,
const complaindata=require(`../models/complain`)
const path=require(`path`)
// Mainpage
const maplocation=require(`../models/complain`)
// const {filecomplain}=require("../controller/app")

const multer=require(`multer`)

// appRouter.get("/" ,Mainpage);
// appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})


appRouter.get('/workhome', async (req, res) => {
    const complaints = await complaindata.find();
    
    // const complaints = await complaindata.find();
    // console.log(complaints);

    // const location=await maplocation.find(Location);
    // console.log(location);
    
    
    // { complaints })
    res.render('workerhome',{complaints}); 
});




// appRouter.post("/fillcomplain",filecomplain)





// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, "public/uploads"); // Make sure this directory exists
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
//     }
// });
// const upload = multer({ storage: storage });

// // POST Route to Save Data
// appRouter.post("/fillcomplain", upload.single("Image"), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).send("No image uploaded");
//         }

//         const newComplain = new ComplainModel({
//             Name: req.body.Name,
//             Location: req.body.Location,
//             Image: "/uploads/" + req.file.filename, // Save image path
//         });

//         await newComplain.save(); // Save data to MongoDB
//         res.redirect("/workerhome"); // Redirect after saving
//     } catch (err) {
//         console.error("Error saving complaint:", err);
//         res.status(500).send("Error processing complaint");
//     }
// });



















// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       return cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//     //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       return cb(null, file.fieldname + '-' + file.originalname)
//     }
//   })
  
//   const upload = multer({ storage: storage })

//   appRouter.post('/fillcomplain',filecomplain)


// upload.single(`Image`)
// const upload = multer({ dest: 'uploads/' })
// appRouter.post('/fillcomplain',filecomplain,async (req,res)=>{
    //  const {Name,Location,Image}=await req.body
    //     complaindata.create({
    //         Name,
    //         Location,
    //         Image,
        
    //     })
    //     console.log(Name);
    //     console.log(req.file);
    // try {
    //     if (!req.file) {
    //         return res.status(400).send("No file uploaded.");
    //     }

    //     // Convert file path to forward slashes (important for Windows)
    //     const filePath = req.file.path.replace(/\\/g, "/");

    //     const newComplaint = await complaindata.create({
    //         Name: req.body.name,
    //         Location: req.body.location,
    //         Image: filePath  // Save corrected path
    //     });

    //     await newComplaint.save();
    //     res.redirect("/workerhome");
    // } catch (err) {
    //     console.error("Error:", err);
    //     res.status(500).send("Error uploading file");
    // }
        // res.redirect(`/homepage`)
        // console.log(req.body);
        
        
// })

// appRouter.get('/profile', (req, res)=>{
    //     res.render("profile.ejs");
    // })
    // appRouter.get("/profile", showProfile); 
//     res.render("profile.ejs");
// })
appRouter.get("/profile", showProfile); 

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

// appRouter.post('fillcomplain',filecomplain)

appRouter.get("/", (req, res)=>{
    return res.render("homepage");
})
    
    
    
    // router.get('/complain',(req,res)=>{
    //         res.render(`form`)
    //         })
        
        // const storage = multer.diskStorage({
        //     destination: function (req, file, cb) {
        //         cb(null, "/public/uploads"); // Store images in public/uploads
        //     },
        //     filename: function (req, file, cb) {
        //         cb(null+ path.extname(file.originalname)); // Unique filename
        //     }
        // });
        
        // const upload = multer({ storage: storage });
        
        
        
        // appRouter.post(`/complain`, )

//         appRouter.post("/complain", upload.single("image"), filecomplain, async (req, res) => {
       
//     try {
//         const newComplaint = new Complaint({
//             name: req.body.name,
//             description: req.body.description,
//             image: "/uploads/" + req.file.filename // Store relative path
//         });

//         await newComplaint.save();
//         res.redirect("/workerhome"); // Redirect after uploading
//     } catch (err) {
//         res.status(500).send("Error uploading file");
//     }
// });


// const newupload = multer({ dest: '../public/uploads/' })
// appRouter.post("/complain", newupload.single("Image"), async (req, res) => {

//     console.log(req.file, req.body)
// })

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   })
  
//   const upload = multer({ storage: storage })
    // const multer  = require('multer')
    // const upload = multer({ dest: `` })
    // // app.post('/stats', upload.single('uploaded_file'), function (req, res) {
    //    // req.file is the name of your file in the form above, here 'uploaded_file'
    //    // req.body will hold the text fields, if there were any 
    //    console.log(req.file, req.body)
    // });

    // try {
    //     // Ensure an image is uploaded
    //     if (!req.file) {
    //         return res.status(400).send("No file uploaded.");
    //     }

        // const newComplaint = new Complaint({
        //     name: req.body.name,
        //     description: req.body.description,
        //     image: "/uploads/" + req.file.filename // Store relative path
        // });

    //     await newComplaint.save();
    //     res.redirect("/workerhome"); // Redirect after uploading
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).send("Error uploading file");
    // }
// });

module.exports = appRouter;

