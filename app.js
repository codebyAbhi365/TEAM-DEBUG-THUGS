const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 5000;

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


//setting up veiw engine as ejs
app.set("view engine" , "ejs");
app.set("views" , path.resolve("views"));

app.use("/home" , restrictToLoginUserOnly , appRouter);
app.use("/" , router);

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
});