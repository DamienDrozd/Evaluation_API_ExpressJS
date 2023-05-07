"use strict";

var mongoose = require('mongoose');
var skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});
module.exports = mongoose.model('Skill', skillSchema);