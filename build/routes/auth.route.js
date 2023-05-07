"use strict";

var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth.controller');
var verifyToken = require('../middlewares/verifyToken');
router.post('/register/freelance', authController.register_freelance);
router.post('/register/company', authController.register_company);
router.post('/login', authController.login);
router.put('/password/change', authController.change_password);
router.put('/password/forgot', authController.forgot_password);
module.exports = router;