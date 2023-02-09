const express = require('express');

const router = express.Router();
const skillController = require('../controllers/skill.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/', skillController.getSkills);

router.get('/:id', skillController.getSkill);

router.post('/', verifyToken, verifyAdmin, skillController.postSkill);

router.put('/:id', verifyToken, verifyAdmin, skillController.updateSkill);

router.delete('/:id', verifyToken, verifyAdmin, skillController.deleteSkill);

module.exports = router;