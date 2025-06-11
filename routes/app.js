const express = require('express')
const appRouter = express.Router()
const {showProfile,requestAccept,showRequest} = require("../controller/app")
// filecomplain,
const complaindata=require(`../models/complain`)
const path=require(`path`)
// Mainpage
const maplocation=require(`../models/complain`)
// const {filecomplain}=require("../controller/app")

const multer=require(`multer`)

appRouter.post("/accepted/:id", requestAccept);  // Accept a complaint

appRouter.get("/submission", showRequest);  // Show all accepted complaints

// appRouter.get("/" ,Mainpage);
// appRouter.post(`/complain`, filecomplain)

appRouter.get('/complain',(req,res)=>{
    res.render(`form.ejs`)
})






appRouter.get('/', async (req, res) => {
    const complaints = await complaindata.find({ status: 'approved' });
    
    res.render('workerhome_2.ejs',{complaints}); 
});



appRouter.get("/profile", showProfile); 

// const {filecomplain}=require("../controller/app")


// router.get('/complain',(req,res)=>{
//     res.render(`form`)
//     })

// appRouter.post('fillcomplain',filecomplain)


const Task = require(`../models/task`);
const { log } = require('console')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage: storage });

// appRouter.get('/', async (req, res) => {
//     const accepted = await Task.find();
//     res.render('your-submission-page', { accepted });
// });

appRouter.post('/reward', upload.fields([{ name: 'beforeImage' }, { name: 'afterImage' }]), async (req, res) => {

    const {name,id,location,livelocation}=req.body
    try {
        Task.create({
            name: name,
            id: id,
            location: location,
            liveLocation: livelocation,
            // beforeImage: req.files['beforeImage'][0].filename,
            // afterImage: req.files['afterImage'][0].filename
        });
        console.log(name,id);
        // const tasks = await Task.find({});
        // console.log(tasks);
        
        
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        
        res.status(500).send('Error submitting task');
    }
});




    
module.exports = appRouter;

