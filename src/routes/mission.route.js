const express = require('express');

const router = express.Router();
const missionController = require('../controllers/mission.controller');
const proposalController = require('../controllers/proposal.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyCompany = require('../middlewares/verifyCompany');
const verifyAdmin = require('../middlewares/verifyAdmin');



router.get('/', verifyToken, verifyCompany, missionController.getMissions);

router.get('/:id', verifyToken, verifyCompany, missionController.getMission);

router.post('/', verifyToken, verifyCompany, missionController.postMission);

router.put('/:id', verifyToken, verifyCompany, missionController.updateMission)

router.delete('/:id', verifyToken, verifyCompany, missionController.deleteMission);

//-------------------------Freelance-------------------------------

router.get('/freelance/', verifyToken, missionController.getFreelanceMissions);

router.get('/freelance/:id', verifyToken, missionController.getFreelanceMission);

// -------------------------Admin-----------------------------------

router.get('/admin/freelance/:id', verifyToken, verifyAdmin, missionController.getAdminFreelanceMission);

router.get('/admin/company/:id', verifyToken, verifyAdmin, missionController.getAdminCompanyMission);


module.exports = router;