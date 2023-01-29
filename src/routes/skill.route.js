const express = require('express');

const router = express.Router();
const skillController = require('../controllers/skill.controller');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', skillController.getSkills);

router.get('/:id', skillController.getSkill);

router.post('/', skillController.postSkill);

router.put('/:id', skillController.updateSkill);

router.delete('/:id', skillController.deleteSkill);

module.exports = router;