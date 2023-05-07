"use strict";

var mongoose = require('mongoose');
var companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    required: true
  },
  siret: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
  missions: [{
    date: {
      start: {
        type: Date,
        "default": Date.now
      },
      end: {
        type: Date,
        "default": Date.now
      }
    },
    price: {
      type: Number
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    skills: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Skill"
    }],
    jobs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job"
    }],
    proposals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proposal"
    }],
    freelance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    mission_status: {
      type: String,
      "default": "En cours"
    }
  }]
});
module.exports = mongoose.model('Company', companySchema);