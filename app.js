const express = require("express");
const path = require("path");
const app = express();
const PORT = 5000;

const {router}=require(`./routes/app`)

//Connecting MongoDb
const ConnectTOMongoDB = require("./connections");
ConnectTOMongoDB();

// app.use(`/`,router)

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//setting up veiw engine as ejs
app.set("view engine" , "ejs");
app.set("views" , path.resolve("views"));

app.get(`/login`,(req,res)=>{
    res.render(`signup`)
})

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
});