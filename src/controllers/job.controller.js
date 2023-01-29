const Job = require('../models/job.model');



exports.getJobs = async (req, res, next) => {
    Job.find().then((jobs) => {
        res.send(jobs);
    }).catch((error) => {
        next(error);
    });
};

exports.getJob = async (req, res, next) => {
    Job.findById(req.params.id).then((job) => {
        res.send(job);
    }).catch((error) => {
        next(error);
    });
};

exports.postJob = async (req, res, next) => {
    const newJob = new Job({
        name: req.body.name,
    });
    newJob.save().then((job) => {
        res.send(job);
    }).catch((error) => {
        next(error);
    });
};

exports.updateJob = async (req, res, next) => {
    Job.findById(req.params.id).then((job) => {
        job.name = req.body.name;
        job.save().then((job) => {
            res.send(job);
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    });
};

exports.deleteJob = async (req, res, next) => {
    Job.findByIdAndDelete(req.params.id).then((job) => {
        res.send(job);
    }).catch((error) => {
        next(error);
    });
};