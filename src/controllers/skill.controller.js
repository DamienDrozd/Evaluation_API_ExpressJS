const Skill = require('../models/skill.model');



exports.getSkills = async (req, res, next) => {
    Skill.find().then((skill) => {
        res.send(skill);
    }).catch((error) => {
        next(error);
    });
};

exports.getSkill = async (req, res, next) => {
    Skill.findById(req.params.id).then((skill) => {
        res.send(skill);
    }).catch((error) => {
        next(error);
    });
};

exports.postSkill = async (req, res, next) => {
    const newSkill = new Skill({
        name: req.body.name,
    });
    newSkill.save().then((skill) => {
        res.send(skill);
    }).catch((error) => {
        next(error);
    });
};

exports.updateSkill = async (req, res, next) => {
    Skill.findById(req.params.id).then((skill) => {
        skill.name = req.body.name;
        skill.save().then((skill) => {
            res.send(skill);
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    });
};

exports.deleteSkill = async (req, res, next) => {
    Skill.findByIdAndDelete(req.params.id).then((skill) => {
        res.send(skill);
    }).catch((error) => {
        next(error);
    });
};