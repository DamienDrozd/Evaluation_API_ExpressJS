const Company = require("../models/company.model.js");
const Proposal = require("../models/proposal.model.js");



//-------------------------Freelance-------------------------------

exports.getFreelanceProposals = async (req, res, next) => {
    Proposal.find({user: req.userToken.userId}).then((proposals) => {
        res.send(proposals);
    }).catch((error) => {
        next(error);
    });
};

exports.getFreelanceProposal = async (req, res, next) => {
    Proposal.find({user: req.userToken.userId}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        res.send(proposal);
    }).catch((error) => {
        next(error);
    });
};

exports.acceptProposal = async (req, res, next) => {
    Proposal.find({user: req.userToken.userId}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        proposal.status = "accepted";
        res.send(proposal);
    }).catch((error) => {
        next(error);
    });
};

exports.denyProposal = async (req, res, next) => {
    Proposal.find({user: req.userToken.userId}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        proposal.status = "denied";
        res.send(proposal);
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

exports.getCompanyProposal = async (req, res, next) => {
    Proposal.find({company: req.userToken.companyId}).then((proposals) => {
        let proposal = proposals.find(proposal => proposal._id == req.params.id);
        res.send(proposal);
    }).catch((error) => {
        next(error);
    });
};

exports.postProposal = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        Proposal.create({
            user: req.userToken.userId,
            company: company._id,
            price: req.body.price,
            date: {
                start: req.body.date.start,
                end: req.body.date.end
            },
        }).then((proposal) => {
            company.missions.find((mission) => mission._id == req.body.mission_id).proposals.push(proposal._id);
            company.save();
            res.send(proposal);
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    });
};

exports.updateProposal = async (req, res, next) => {
    Proposal.findById(req.params.id).then((proposal) => {
        proposal.price = req.body.price;
        proposal.date.start = req.body.date.start;
        proposal.date.end = req.body.date.end;
        proposal.save();
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