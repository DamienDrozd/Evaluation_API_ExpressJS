"use strict";

var express = require('express');
var router = express.Router();
var proposalController = require('../controllers/proposal.controller');
var verifyToken = require('../middlewares/verifyToken');
var verifyCompany = require('../middlewares/verifyCompany');
var verifyFreelance = require('../middlewares/verifyFreelance');
var verifyAdmin = require('../middlewares/verifyAdmin');

//-------------------------Freelance-------------------------------

router.get('/freelance/', verifyToken, verifyFreelance, proposalController.getFreelanceProposals);
router.get('/freelance/:id', verifyToken, verifyFreelance, proposalController.getFreelanceProposal);
router.post('/freelance/accept/:id', verifyToken, verifyFreelance, proposalController.acceptProposal);
router.post('/freelance/deny/:id', verifyToken, verifyFreelance, proposalController.denyProposal);

//-------------------------Company-------------------------------

router.get('/company/', verifyToken, verifyCompany, proposalController.getCompanyProposals);
router.get('/company/mission/:id', verifyToken, verifyCompany, proposalController.getMissionProposals);
router.get('/company/:id', verifyToken, verifyCompany, proposalController.getCompanyProposal);
router.post('/company/:id', verifyToken, verifyCompany, proposalController.postProposal);
router.put('/company/:id', verifyToken, verifyCompany, proposalController.updateProposal);
router["delete"]('/company/:id', verifyToken, verifyCompany, proposalController.deleteProposal);

// -------------------------Admin-------------------------------

router.get('/admin/freelance/:id', verifyToken, verifyAdmin, proposalController.getAdminFreelanceProposal);
router.get('/admin/company/:id', verifyToken, verifyAdmin, proposalController.getAdminCompanyProposal);
router.get('/admin/mission/:id', verifyToken, verifyAdmin, proposalController.getAdminMissionProposal);
module.exports = router;