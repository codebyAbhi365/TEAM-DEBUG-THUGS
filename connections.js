const mongoose=require(`mongoose`);

function ConnectTOMongoDB(){
    mongoose.connect(`mongodb+srv://admin121:useradmin123@cluster0.1rhazaf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("MongoDB Connected");
    })
}

module.exports = ConnectTOMongoDB;