const mongoose=require(`mongoose`);

function ConnectTOMongoDB(){
    mongoose.connect(`mongodb+srv://rohitkdm666:4TEJqu62VQ3EeUeQ@cluster0.s8g3fxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("MongoDB Connected");
    })
}
// password:4TEJqu62VQ3EeUeQ

module.exports = ConnectTOMongoDB;

// mongodb://localhost:27017/data
