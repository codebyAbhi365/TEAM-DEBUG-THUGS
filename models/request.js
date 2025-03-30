const mongoose = require("mongoose");

const AcceptedSchema = new mongoose.Schema({
    userId: { type: String, required: true }, 
    complains: [{ type: mongoose.Schema.Types.ObjectId, ref: "complain" }] // Change "complaindata" to "complain"
});

module.exports = mongoose.model("Accepted", AcceptedSchema);
