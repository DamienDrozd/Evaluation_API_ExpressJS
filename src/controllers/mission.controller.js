const Company = require('../models/company.model');
const MailClient = require('../functions/mail');




exports.getMissions = async (req, res, next) => {
    Company.findById(req.userToken.companyId)
    .populate({ path: 'missions', populate: {path : 'skills'} })
    .populate({ path: 'missions', populate: {path : 'jobs'} })
    .populate({ path: 'missions', populate: {path : 'proposals'} })
    .then((company) => {
        res.send(company.missions);
    }).catch((error) => {
        next(error);
    });
};

exports.getMission = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        const mission = company.missions.find((mission) => mission._id == req.params.id);
        res.send(mission);
    }).catch((error) => {
        next(error);
    });
};

exports.postMission = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        company.missions.push({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            date: {
                start: req.body.date.start,
                end: req.body.date.end
            },
            job: req.body.job,
            skills: req.body.skills
        });
        company.save();
        res.send(company.missions);
    }).catch((error) => {
        next(error);
    });
};

exports.updateMission = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        const editMission = req.body
        company.missions = company.missions.filter((mission) => mission._id != req.params.id);
        company.missions.push(editMission);
        company.save();
        res.send(editMission);
    }).catch((error) => {
        next(error);
    });
};

exports.deleteMission = async (req, res, next) => {
    Company.findById(req.userToken.companyId).then((company) => {
        company.missions = company.missions.filter((mission) => mission._id != req.params.id);
        company.save();
        res.send(company.missions);
    }).catch((error) => {
        next(error);
    }); 
};


//------------------------Freelance----------------------------

exports.getFreelanceMissions = async (req, res, next) => {
    Company.find().then((companies) => {
        let missions = [];
        companies.forEach((company) => {
            company.missions.forEach((mission) => {
                if (mission.freelances.includes(req.userToken.userId)){
                    missions.push(mission);
                }
            });
        });
        res.send(missions);
    }).catch((error) => {   
        next(error);
    }
    );
};

exports.getFreelanceMission = async (req, res, next) => {
    Company.find().then((companies) => {
        let mission = null;
        companies.forEach((company) => {
            company.missions.forEach((company_mission) => {
                if (company_mission.freelances.includes(req.userToken.userId) && company_mission._id == req.params.id){
                    mission = company_mission;
                }
            });
        });
        res.send(mission);
    }).catch((error) => {   
        next(error);
    }
    );
};



//-------------------------Admin-------------------------------

exports.getAdminFreelanceMission = async (req, res, next) => {
    Company.find().then((companies) => {
        let mission = null;
        companies.forEach((company) => {
            company.missions.forEach((company_mission) => {
                if (company_mission._id == req.params.id){
                    mission = company_mission;
                }
            });
        });
        res.send(mission);
    }).catch((error) => {   
        next(error);
    }
    );
    
};


exports.getAdminCompanyMission = async (req, res, next) => {
    Company.findById(req.params.id).then((company) => {
        res.send(company.missions);
    }).catch((error) => {
        next(error);
    });
};