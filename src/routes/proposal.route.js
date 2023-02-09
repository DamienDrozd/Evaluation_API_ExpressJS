const express = require('express');

const router = express.Router();
const proposalController = require('../controllers/proposal.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyCompany = require('../middlewares/verifyCompany');
const verifyFreelance = require('../middlewares/verifyFreelance');
const verifyAdmin = require('../middlewares/verifyAdmin');




//-------------------------Freelance-------------------------------

router.get('/freelance/', verifyToken, verifyFreelance, proposalController.getFreelanceProposals);

router.get('/freelance/:id', verifyToken, verifyFreelance, proposalController.getFreelanceProposal);

router.post('/freelance/accept/:id', verifyToken, verifyFreelance, proposalController.acceptProposal);

router.post('/freelance/deny/:id', verifyToken, verifyFreelance, proposalController.denyProposal);




//-------------------------Company-------------------------------

router.get('/company/', verifyToken, verifyCompany, proposalController.getCompanyProposals);

router.get('/company/mission/:id', verifyToken, verifyCompany, proposalController.getMissionProposals); 

router.get('/company/:id', proposalController.getCompanyProposal);

router.post('/company/:id', verifyToken, verifyCompany, proposalController.postProposal);

router.put('/company/:id', verifyToken, verifyCompany, proposalController.updateProposal)

router.delete('/company/:id', verifyToken, verifyCompany, proposalController.deleteProposal);


// -------------------------Admin-------------------------------

router.get('/admin/freelance/:id', verifyToken, verifyAdmin, proposalController.getAdminFreelanceProposal);

router.get('/admin/company/:id', verifyToken, verifyAdmin, proposalController.getAdminCompanyProposal);

router.get('/admin/mission/:id', verifyToken, verifyAdmin, proposalController.getAdminMissionProposal);

module.exports = router;