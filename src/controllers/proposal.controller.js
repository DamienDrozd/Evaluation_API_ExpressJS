const Company = require("../models/company.model.js");
const Proposal = require("../models/proposal.model.js");
const User = require("../models/user.model.js");
const MailClient = require('../functions/mail');




//-------------------------Freelance-------------------------------

exports.getFreelanceProposals = async (req, res, next) => {
    Proposal.find({user: req.userToken.id})
        .populate('company')
        .then((proposals) => {
            proposals.forEach((proposal) => {
                console.log(proposal.company.missions.filter((mission) => mission._id == proposal._id)[0]);
            });
            console.log(proposals);
            console.log(req.userToken.id)
            res.send(proposals);
    }).catch((error) => {
        next(error);
    });
};

exports.getFreelanceProposal = async (req, res, next) => {
    Proposal.findOne({user: req.userToken.id, _id : req.params.id}).then((proposal) => {
        res.send(proposal);
    }).catch((error) => {
        next(error);
    });
};

exports.acceptProposal = async (req, res, next) => {
    const mail = new MailClient();
    Proposal.find({user: req.userToken.id}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        proposal.status = "accepted";
        Company.findById(proposal.company).then((company) => {
            let mission = company.missions.find((mission) => mission._id == proposal.mission);
            mission.status = "accepted";
            mission.freelance = proposal.user;
            mission.proposals = [];
            res.send(proposal);
            User.find({company: company._id}).then((users) => {
                users.forEach((user) => {
                    mail.sendMail(user.email, "Mission accepted", "Your mission has been accepted by a freelance");
                });
            }).catch((error) => {
                next(error);
            });
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    });
};

exports.denyProposal = async (req, res, next) => {
    const mail = new MailClient();
    Proposal.find({user: req.userToken.id}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        proposal.status = "denied";
        Company.findById(proposal.company).then((company) => {
            let mission = company.missions.find((mission) => mission._id == proposal.mission);
            mission.proposals = mission.proposals.filter((proposal) => proposal._id != req.params.id);
            User.find({company: company._id}).then((users) => {
                users.forEach((user) => {
                    mail.sendMail(user.email, "Mission denied", "Your mission has been denied by a freelance");
                });
            }).catch((error) => {
                next(error);
            });
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    });
};


//-------------------------Company-------------------------------


exports.getCompanyProposals = async (req, res, next) => {
    Proposal.find({company: req.userToken.companyId}).then((proposals) => {
        res.send(proposals);
    }).catch((error) => {
        next(error);
    });
};

exports.getMissionProposals = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        let mission = company.missions.find((mission) => mission._id == req.params.id);
        res.send(mission.proposals);
    }).catch((error) => {
        next(error);
    });
};

exports.getCompanyProposal = async (req, res, next) => {
    Proposal.find({company: req.userToken.companyId}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        res.send(proposal);
    }).catch((error) => {
        next(error);
    });
};

exports.postProposal = async (req, res, next) => {
    try {
        const mail = new MailClient();
        Company.findById(req.userToken.companyId).then((company) => {
            console.log(req.params.id);
            if (req.body.mission_id == null) {
                res.status(400).send({
                    message: "You must specify a mission"
                });
            }
            Proposal.create({
                user: req.params.id,
                company: company._id,
            }).then((proposal) => {
                if (company.missions.find((mission) => mission._id == req.body.mission_id).proposals.length >= 3) {
                    res.status(400).send({
                        message: "You can't post more than 3 proposals for a mission"
                    });
                } else {
                    company.missions.find((mission) => mission._id == req.body.mission_id).proposals.push(proposal._id);
                    company.save();
                    console.log(req.params.id);
                    User.findById(req.params.id).then((user) => {
                        mail.send(user.email, "New proposal", "You have a new proposal for your mission " + company.missions.find((mission) => mission._id == req.body.mission_id).title);
                    }).catch((error) => {
                        next(error);
                    });
                    res.send(proposal);
                }
            }).catch((error) => {
                next(error);
            });
        }).catch((error) => {
            next(error);
        });
    } catch (error) {
        next(error);
    }
};

exports.updateProposal = async (req, res, next) => {
    Proposal.findByIdAndUpdate(req.params.id, req.body).then((proposal) => {
        res.send(proposal);
    }).catch((error) => {
        next(error);
    });
};

exports.deleteProposal = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        company.missions.find((mission) => mission._id == req.body.mission_id).proposal = company.missions.find((mission) => mission._id == req.body.mission_id).proposals.filter((proposal) => proposal != req.params.id);
        company.save();
        Proposal.findByIdAndDelete(req.params.id).then((proposal) => {
            res.send(proposal);
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    });
};



//-------------------------Admin-------------------------------

exports.getAdminCompanyProposal = async (req, res, next) => {
    Company.find().then((companies) => {
        let missions = [];
        companies.forEach((company) => {
            company.missions.forEach((mission) => {
                missions.push(mission);
            });
        });
        res.send(missions);
    }).catch((error) => {
        next(error);
    });
};


exports.getAdminMissionProposal = async (req, res, next) => {
    Company.find().then((companies) => {
        let mission = null;
        companies.forEach((company) => {
            company.missions.forEach((m) => {
                if (m._id == req.params.id) {
                    mission = m;
                }
            });
        });
        res.send(mission);
    }).catch((error) => {
        next(error);
    });
}

exports.getAdminFreelanceProposal = async (req, res, next) => {
    Proposal.find({user: req.params.id}).then((proposals) => {
        res.send(proposals);
    }).catch((error) => {
        next(error);
    });
};

