const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postcode: {type: String, required: true},
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false},
    freelance: {
        price : Number,
        experience_years: Number,
        skills: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Skill"
        }],
        jobs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job"
        }],
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },
});

module.exports = mongoose.model('User', userSchema);