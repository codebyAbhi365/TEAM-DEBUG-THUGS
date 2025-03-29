const express = require("express");
const app = express();
const PORT = 5000;

//Connecting MongoDb
const ConnectTOMongoDB = require("./connections");
ConnectTOMongoDB();

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//setting up veiw engine as ejs
app.set("view engine" , "ejs");
app.set("views" , path.resolve("views"));

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
});