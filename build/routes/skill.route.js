"use strict";

var express = require('express');
var router = express.Router();
var skillController = require('../controllers/skill.controller');
var verifyToken = require('../middlewares/verifyToken');
var verifyAdmin = require('../middlewares/verifyAdmin');
router.get('/', skillController.getSkills);
router.get('/:id', skillController.getSkill);
router.post('/', verifyToken, verifyAdmin, skillController.postSkill);
router.put('/:id', verifyToken, verifyAdmin, skillController.updateSkill);
router["delete"]('/:id', verifyToken, verifyAdmin, skillController.deleteSkill);
module.exports = router;