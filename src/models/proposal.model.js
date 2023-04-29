const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    mission : { type: mongoose.Schema.Types.ObjectId },
    user : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    company : { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
    proposal_status : String,
    date : { type: Date, default: Date.now },
});

module.exports = mongoose.model('Proposal', proposalSchema);