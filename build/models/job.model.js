"use strict";

var mongoose = require('mongoose');
var jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});
module.exports = mongoose.model('Job', jobSchema);