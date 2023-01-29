const express = require('express');

const router = express.Router();

const authRoutes = require('./auth.route');
const jobRoutes = require('./job.route');
const missionRoutes = require('./mission.route');
const proposalRoutes = require('./proposal.route');
const skillRoutes = require('./skill.route');
const userRoutes = require('./user.route');


router.use('/auth', authRoutes);
router.use('/job', jobRoutes);
router.use('/mission', missionRoutes);
router.use('/proposal', proposalRoutes);
router.use('/skill', skillRoutes);
router.use('/user', userRoutes);



module.exports = router;
