
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    taskId: String,
    location: String,
    beforeImage: String,
    afterImage: String,
    liveLocation: String,
    status: { type: String, enum: ['pending','complete'], default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
