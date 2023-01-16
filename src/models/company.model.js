const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    status: String,
    siret: String,
    address: String,
    city: String,
    postcode: String,
    mission: Array
});

module.exports = mongoose.model('Company', companySchema);