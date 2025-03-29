const express = require("express");
const app = express();
const PORT = 5000;

//Connecting MongoDb
const ConnectTOMongoDB = require("./connections");
ConnectTOMongoDB();

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT ${PORT}`)
});