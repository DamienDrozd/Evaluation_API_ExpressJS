const express = require('express');

const router = express.Router();
const missionController = require('../controllers/mission.controller');
const verifyToken = require('../middlewares/verifyToken');


router.get('/', missionController.getMissions);

router.get('/:id', missionController.getMission);

router.post('/', missionController.postMission);

router.put('/:id', missionController.updateMission)

router.delete('/:id', missionController.deleteMission);

module.exports = router;