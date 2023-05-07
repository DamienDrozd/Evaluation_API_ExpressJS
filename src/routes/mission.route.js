const express = require('express');

const router = express.Router();
const missionController = require('../controllers/mission.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyCompany = require('../middlewares/verifyCompany');
const verifyAdmin = require('../middlewares/verifyAdmin');
const verifyFreelance = require('../middlewares/verifyFreelance');



router.get('/', verifyToken, verifyCompany, missionController.getMissions);

router.get('/:id', verifyToken, verifyCompany, missionController.getMission);

router.post('/', verifyToken, verifyCompany, missionController.postMission);

router.put('/:id', verifyToken, verifyCompany, missionController.updateMission)

router.delete('/:id', verifyToken, verifyCompany, missionController.deleteMission);

//-------------------------Freelance-------------------------------

router.get('/freelance/', verifyToken, verifyFreelance, missionController.getFreelanceMissions);

router.get('/freelance/:id', verifyToken, verifyFreelance, missionController.getFreelanceMission);

// -------------------------Admin-----------------------------------

router.get('/admin/freelance/:id', verifyToken, verifyAdmin, missionController.getAdminFreelanceMission);

router.get('/admin/company/:id', verifyToken, verifyAdmin, missionController.getAdminCompanyMission);

router.get('/admin', verifyToken, verifyAdmin, missionController.getAdminMissions);

router.get('/admin/:id', verifyToken, verifyAdmin, missionController.getAdminMission);

router.put('/admin/:id', verifyToken, verifyAdmin, missionController.updateAdminMission);

router.delete('/admin/:id', verifyToken, verifyAdmin, missionController.deleteAdminMission);    

 
module.exports = router; 