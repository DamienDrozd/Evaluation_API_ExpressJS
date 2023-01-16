const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('job', jobSchema);