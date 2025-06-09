const mongoose=require(`mongoose`);

function ConnectTOMongoDB(){
    mongoose.connect(`mongodb://localhost:27017/Clean-City`)
    .then(() => {
        console.log("MongoDB Connected");
    })
}
// password:4TEJqu62VQ3EeUeQ

module.exports = ConnectTOMongoDB;

// mongodb://localhost:27017/data
