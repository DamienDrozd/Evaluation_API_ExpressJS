const express = require('express');

const router = express.Router();
const proposalController = require('../controllers/proposal.controller');
const verifyToken = require('../middlewares/verifyToken');



//-------------------------Freelance-------------------------------

router.get('/freelance/', proposalController.getFreelanceProposals);

router.get('/freelance/:id', proposalController.getFreelanceProposal);

router.post('/freelance/accept/:id', proposalController.acceptProposal);

router.post('/freelance/deny/:id', proposalController.denyProposal);




//-------------------------Company-------------------------------

router.get('/company/', proposalController.getCompanyProposals);

router.get('/company/:id', proposalController.getCompanyProposal);

router.post('/company/:id', proposalController.postProposal);

router.put('/company/:id', proposalController.updateProposal)

router.delete('/company/:id', proposalController.deleteProposal);

module.exports = router;