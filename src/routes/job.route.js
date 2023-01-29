const express = require('express');

const router = express.Router();
const jobController = require('../controllers/job.controller');
const verifyToken = require('../middlewares/verifyToken');



router.get('/', jobController.getJobs);

router.get('/:id', jobController.getJob);

router.post('/', jobController.postJob);

router.put('/:id', jobController.updateJob)

router.delete('/:id', jobController.deleteJob);

module.exports = router;