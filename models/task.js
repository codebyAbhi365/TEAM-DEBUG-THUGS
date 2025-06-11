
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    id: String,
    location: String,
    beforeImage: String,
    afterImage: String,
    liveLocation: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
