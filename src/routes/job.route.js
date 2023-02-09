const express = require('express');

const router = express.Router();
const jobController = require('../controllers/job.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');



router.get('/',  jobController.getJobs);

router.get('/:id', jobController.getJob);

router.post('/', verifyToken, verifyAdmin, jobController.postJob);

router.put('/:id', verifyToken, verifyAdmin, jobController.updateJob)

router.delete('/:id', verifyToken, verifyAdmin, jobController.deleteJob);

module.exports = router;