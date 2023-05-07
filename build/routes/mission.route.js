"use strict";

var express = require('express');
var router = express.Router();
var missionController = require('../controllers/mission.controller');
var verifyToken = require('../middlewares/verifyToken');
var verifyCompany = require('../middlewares/verifyCompany');
var verifyAdmin = require('../middlewares/verifyAdmin');
var verifyFreelance = require('../middlewares/verifyFreelance');
router.get('/', verifyToken, verifyCompany, missionController.getMissions);
router.get('/:id', verifyToken, verifyCompany, missionController.getMission);
router.post('/', verifyToken, verifyCompany, missionController.postMission);
router.put('/:id', verifyToken, verifyCompany, missionController.updateMission);
router["delete"]('/:id', verifyToken, verifyCompany, missionController.deleteMission);

//-------------------------Freelance-------------------------------

router.get('/freelance/', verifyToken, verifyFreelance, missionController.getFreelanceMissions);
router.get('/freelance/:id', verifyToken, verifyFreelance, missionController.getFreelanceMission);

// -------------------------Admin-----------------------------------

router.get('/admin/freelance/:id', verifyToken, verifyAdmin, missionController.getAdminFreelanceMission);
router.get('/admin/company/:id', verifyToken, verifyAdmin, missionController.getAdminCompanyMission);
module.exports = router;