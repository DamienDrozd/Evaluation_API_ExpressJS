const express = require('express');

const router = express.Router();
const authController = require('../controllers/auth.controller');
const verifyToken = require('../middlewares/verifyToken');



router.post('/register/freelance', authController.register_freelance);

router.post('/register/company', authController.register_company);

router.get('/login', authController.login);

router.put('/password/change', authController.change_password)

router.put('/password/forgot', authController.forgot_password);

module.exports = router; 