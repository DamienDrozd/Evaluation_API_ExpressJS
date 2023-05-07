"use strict";

var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var verifyToken = require('../middlewares/verifyToken');
var verifyAdmin = require('../middlewares/verifyAdmin');
var verifyCompany = require('../middlewares/verifyCompany');
var verifyFreelance = require('../middlewares/verifyFreelance');

//----------ADmin routes----------------
router.get('/admin/', verifyToken, verifyAdmin, userController.getAdminUsers);
router.get('/admin/:id', verifyToken, verifyAdmin, userController.getAdminUser);
router.put('/admin/:id', verifyToken, verifyAdmin, userController.updateAdminUser);
router["delete"]('/admin/:id', verifyToken, verifyAdmin, userController.deleteAdminUser);
router.get('/company/admin', verifyToken, verifyAdmin, userController.getAdminCompanies);
router.get('/company/admin/:id', verifyToken, verifyAdmin, userController.getAdminCompany);
router.put('/company/admin/:id', verifyToken, verifyAdmin, userController.updateAdminCompany);
router["delete"]('/company/admin/:id', verifyToken, verifyAdmin, userController.deleteAdminCompany);

//----------User routes----------------

router.get('/', verifyToken, userController.getUser);
router.put('/', verifyToken, userController.updateUser);
router["delete"]('/', verifyToken, userController.deleteUser);

//----------Company routes----------------

router.get("/company/users", verifyToken, verifyCompany, userController.getCompanyUsers);
router.get('/company/', verifyToken, verifyCompany, userController.getCompany);
router.put('/company/', verifyToken, verifyCompany, userController.updateCompany);
router["delete"]('/company/', verifyToken, verifyCompany, userController.deleteCompany);

//----------Search routes----------------

router.get('/freelance/', userController.getFreelanceUsers);
router.get('/freelance/:id', userController.getFreelanceUser);
router.get('/freelance/search/:search', userController.searchUsers);
router.post('/freelance/filter/', userController.filterUsers);
module.exports = router;