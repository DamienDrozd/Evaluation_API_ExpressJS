const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    postcode: String,
    phone: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    freelance: Object,
    company_key: Number,
});

module.exports = mongoose.model('User', userSchema);