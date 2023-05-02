const User = require("../models/user.model");
const Company = require("../models/company.model");
const { faker } = require('@faker-js/faker');


//-------------------------Admin-------------------------------

exports.getAdminUsers = async (req, res, next) => {
    User.find()
    .populate("company")
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((users) => {
        res.send(users);
    }).catch((error) => {
        next(error);
    });
};

exports.getAdminUser = async (req, res, next) => {
    User.findById(req.params.id)
    .populate("company")
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((user) => {
        res.send(user);
    }).catch((error) => {
        next(error);
    }
    );
};

exports.updateAdminUser = async (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
        if (!user) {
            return res.status(404).send({
            message: 'user not found',
            });
        }
        User.findById(user._id).then((userupdated) => {
            res.send({user : userupdated, message: 'updated'});
        }).catch((error) => {
            next(error);
        });
    })
    .catch((err) => next(err));
};

exports.deleteAdminUser = async (req, res, next) => {
    User.findByIdAndDelete(req.params.id).then((user) => {
        res.send({user : user, message: 'deleted'});
    }).catch((error) => {
        next(error);
    });
};

//company


exports.getAdminCompanies = async (req, res, next) => { 
    Company.find().then((companies) => {
        res.send(companies);
    }).catch((error) => {
        next(error);
    });
};

exports.getAdminCompany = async (req, res, next) => {
    Company.findById(req.params.id).then((company) => {
        res.send(company);
    }).catch((error) => {
        next(error);
    }
    );
};

exports.updateAdminCompany = async (req, res, next) => {
    Company.findByIdAndUpdate(req.params.id, req.body)
    .then((company) => {
        if (!company) {
            return res.status(404).send({
            message: 'company not found',
            });
        }
        Company.findById(company._id).then((companyupdated) => {
            res.send({company : companyupdated, message: 'updated'});
        }).catch((error) => {
            next(error);
        });
    })
    .catch((err) => next(err));
};

exports.deleteAdminCompany = async (req, res, next) => {
    Company.findByIdAndDelete(req.params.id).then((company) => {
        res.send({company : company, message: 'company deleted'});
    }).catch((error) => {
        next(error);
    });
};


//-------------------------User-------------------------------

exports.getUser = async (req, res, next) => {
    User.findById(req.userToken.id)
    .populate("company")
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((user) => {
        res.send(user);
    }).catch((error) => {
        next(error);
    }
    );
};

exports.updateUser = async (req, res, next) => {
    User.findByIdAndUpdate(req.userToken.id, req.body)
    .then(() => {
        User.findById(req.userToken.id)
        .populate("company")
        .populate({ path: 'freelance', populate: {path : 'skills'} })
        .populate({ path: 'freelance', populate: {path : 'jobs'} })
        .then((user) => {
            res.send({user : user, message: 'updated'})
        }).catch((error) => {
            next(error);
        });
    }).catch((error) => {
        next(error);
    }
    );
};

exports.deleteUser = async (req, res, next) => {
    User.findByIdAndDelete(req.userToken.id).then((user) => {
        res.send({user : user, message: 'deleted'})
    }).catch((error) => {
        next(error);
    });
};



//-------------------------Company-------------------------------

exports.getCompanyUsers = async (req, res, next) => {
    User.findById(req.userToken.id)
    .then((user) => {
        let company_id = user.company;
        User.find()
        .then((users) => {
            users = users.filter(user => user.company != null);
            users = users.filter(new_user => new_user.company.toString() == company_id.toString());
            res.send(users);
        }).catch((error) => {
            next(error);
        }  
        );
    }).catch((error) => {
        next(error);
    }
    );
};


exports.getCompany = async (req, res, next) => {
    User.findById(req.userToken.id)
    .populate("company")
    .then((user) => {
        if (user.company == null) {
            res.status(404).send("User is not a company");
        } else {
            res.send(user.company);
        }
    }).catch((error) => {
        next(error);
    }
    );
};

exports.updateCompany = async (req, res, next) => {
    User.findById(req.userToken.id)
    .populate("company")
    .then((user) => {
        if (user.company == null) {
            res.status(404).send("User is not a company");
        } else {
            Company.findByIdAndUpdate(user.company._id, req.body)
            .then((newCompany) => {
                newCompany.save().then(() => {
                    Company.findById(user.company._id).then((company) => {
                        res.send({company : company, message: 'updated', success: true});
                    }).catch((error) => {
                        next(error);
                    });
                }).catch((error) => {
                    next(error);
                });
            }).catch((error) => {
                next(error);
            });
        }
    }).catch((error) => {
        next(error);
    }
    );
};

exports.deleteCompany = async (req, res, next) => {
    User.findById(req.userToken.id)
    .populate("company")
    .then((user) => {
        if (user.company == null) {
            res.status(404).send("User is not a company");
        } else {
            Company.findByIdAndDelete(user.company._id).then((company) => {
                res.send({company : company, message: 'deleted'});
            }).catch((error) => {
                next(error);
            });
        }
    }).catch((error) => {
        next(error);
    }
    );
};

//-------------------------Search-------------------------------

exports.searchUsers = async (req, res, next) => {
    // search by firstname, lastname, city, skills, job
    if (req.params.search == null || req.params?.search == "" || req.params?.search == undefined) {
        return res.status(400).send("searchString is required");
    }
    let searchString = req.params?.search?.toLowerCase();
    let SearchTab = searchString.split(" ");
    User.find({ freelance: { $ne: null } })
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((users) => {
        users = users.filter(user => {
            let userString = user.firstName + " " + user.lastName + " " + user.city;
            if (user.freelance.skills !== null && user.freelance.skills !== undefined && user.freelance.skills.length > 0) {
                for (let skill of user?.freelance?.skills) {
                    userString += " " + skill.name;
                }
            }
            if (user.freelance.jobs !== null && user.freelance.jobs !== undefined && user.freelance.jobs.length > 0){
                for (let job of user?.freelance?.jobs) {
                    userString += " " + job.name;
                }
            }
            userString = userString.toLowerCase();
            for (let key of SearchTab) {
                if (userString.includes(key)) {
                    return true;
                }
            }
            return false;
        });
        let newUsers = addThumbnail(users);
        res.send(newUsers);
    }).catch((error) => {
        next(error);
    });
};

exports.filterUsers = async (req, res, next) => {
    User.find({ freelance: { $ne: null } })
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((users) => {
        users = users.filter(user => {
            if (req.body?.skills !== null && req.body?.skills !== undefined && req.body?.skills.length > 0) {
                let skills = user?.freelance?.skills;
                if (skills === null || skills === undefined || skills.length === 0) {
                    return false;
                }
                let skillsTab = req.body?.skills;
                let found = false;
                for (let skillTab of skillsTab) {
                    for (let skill of skills) {
                        if (skill._id === skillTab._id) {
                            found = true;
                            break;
                        }
                    } 
                    if (found) {
                        break;
                    } else {
                        return false;
                    }
                }
            }
            // jobs
            if (req.body?.jobs !== null && req.body?.jobs !== undefined && req.body?.jobs.length > 0) {
                let jobs = user?.freelance?.jobs;   
                if (jobs === null || jobs === undefined || jobs.length === 0) {
                    return false;
                }
                let jobsTab = req.body?.jobs;
                for (let jobTab of jobsTab) {
                    let found = false;
                    for (let job of jobs) {
                        if (job._id.toString() === jobTab._id) {
                            found = true;
                            break;
                        }
                    }
                    if (found) {
                        break;
                    } else {
                        return false;
                    }
                }
            }
            // min and max price
            if (req.body?.price_min !== null && req.body?.price_min !== undefined && req.body?.price_min !== "") {
                if (user?.freelance?.price === null && user.freelance?.price === undefined) {
                    return false;
                }
                if (user?.freelance?.price < req.body?.price_min) {
                    return false;
                }
            }
            if (req.body?.price_max !== null && req.body?.price_max !== undefined && req.body?.price_max !== "") {
                if (user?.freelance?.price === null && user.freelance?.price === undefined) {
                    return false;
                }
                if (user?.freelance?.price > req.body?.price_max) {
                    return false;
                }
            }

            // min and max experience
            if (req.body?.experience_min !== null && req.body?.experience_min !== undefined && req.body?.experience_min !== "") {
                if (user?.freelance?.experience_years === null && user?.freelance?.experience_years === undefined) {
                    return false;
                }
                if (user?.freelance?.experience_years < req.body?.experience_min) {
                    return false;
                }
            }
            if (req.body?.experience_max !== null && req.body?.experience_max !== undefined && req.body?.experience_max !== "") {
                if (user?.freelance?.experience_years === null && user?.freelance?.experience_years === undefined) {
                    return false;
                }
                if (user?.freelance?.experience_years > req.body?.experience_max) {
                    return false;
                }
            }

            // location
            if (req.body?.location !== null && req.body?.location !== undefined && req.body?.location !== "") {
                if (user?.city === null && user?.city === undefined) {
                    return false;
                }
                if (user?.city !== req.body?.location) {
                    return false;
                }
            }
            return true;
        });
        let newUsers = addThumbnail(users);
        res.send(newUsers);
    }).catch((error) => {
        next(error);
    });
};

exports.getFreelanceUsers = async (req, res, next) => {
    User.find({ freelance: { $ne: null } })
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((users) => {
        let newUsers = addThumbnail(users);
        res.send(newUsers);
    }).catch((error) => {
        next(error);
    }
    );
};


exports.getFreelanceUser = async (req, res, next) => {
    User.findById(req.params.id)
    .populate({ path: 'freelance', populate: {path : 'skills'} })
    .populate({ path: 'freelance', populate: {path : 'jobs'} })
    .then((user) => {
        if (user.freelance == null) {
            res.status(404).send("User is not a freelance");
        } else {
            let newUser = addThumbnail([user])[0];
            res.send(newUser);
        }
    }).catch((error) => {
        next(error);
    }
    );
};

const addThumbnail = (users) => {
    let newUsers = [];
    users.forEach(user => {
        let newUser = {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            city: user.city,
            thumbnail: faker.image.avatar(),
            phone : user.phone,
            email : user.email,
            freelance : user.freelance
        }
        newUsers.push(newUser);
    });
    return newUsers;
}