"use strict";

var express = require('express');
var router = express.Router();
var jobController = require('../controllers/job.controller');
var verifyToken = require('../middlewares/verifyToken');
var verifyAdmin = require('../middlewares/verifyAdmin');
router.get('/', jobController.getJobs);
router.get('/:id', jobController.getJob);
router.post('/', verifyToken, verifyAdmin, jobController.postJob);
router.put('/:id', verifyToken, verifyAdmin, jobController.updateJob);
router["delete"]('/:id', verifyToken, verifyAdmin, jobController.deleteJob);
module.exports = router;