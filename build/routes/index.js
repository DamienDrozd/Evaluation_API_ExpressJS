"use strict";

var express = require('express');
var router = express.Router();
var authRoutes = require('./auth.route');
var jobRoutes = require('./job.route');
var missionRoutes = require('./mission.route');
var proposalRoutes = require('./proposal.route');
var skillRoutes = require('./skill.route');
var userRoutes = require('./user.route');
router.use('/auth', authRoutes);
router.use('/job', jobRoutes);
router.use('/mission', missionRoutes);
router.use('/proposal', proposalRoutes);
router.use('/skill', skillRoutes);
router.use('/user', userRoutes);
module.exports = router;