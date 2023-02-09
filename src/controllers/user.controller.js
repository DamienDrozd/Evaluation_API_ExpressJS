const User = require("../models/user.model");
const Company = require("../models/company.model");

//-------------------------Admin-------------------------------

exports.getAdminUsers = async (req, res, next) => {
    User.find()
    .populate("company")
    .then((users) => {
        res.send(users);
    }).catch((error) => {
        next(error);
    });
};

exports.getAdminUser = async (req, res, next) => {
    console.log("id : ", req.params.id);
    User.findById(req.params.id)
    .populate("company")
    .then((user) => {
        res.send(user);
    }).catch((error) => {
        next(error);
    }
    );
};

exports.updateAdminUser = async (req, res, next) => {
    console.log("id : ", req.params.id);
    console.log("body : ", req.body);
    User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
        console.log(user);
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
        console.log(company);
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
        User.findById(req.userToken.id).then((user) => {
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
                        res.send({company : company, message: 'updated'});
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
    let searchString = req.body.searchString.toLowerCase();
    let SearchTab = searchString.split(" ");
    User.find().then((users) => {
        users = users.filter(user => user.freelance != null);
        users = users.filter(user => {
            let userString = user.firstname + " " + user.lastname + " " + user.city + " " + user.freelance.job + " " + user.freelance.skills.join(" ");
            userString = userString.toLowerCase();
            for (let key in SearchTab) {
                if (!userString.includes(key)) {
                    return false;
                }
            }
            return true;
        });
        res.send(users);
    }).catch((error) => {
        next(error);
    });
};

exports.filterUsers = async (req, res, next) => {
    User.find(req.body).then((users) => {
        users = users.filter(user => user.freelance != null);
        res.send(users);
    }).catch((error) => {
        next(error);
    });
};

exports.getFreelanceUsers = async (req, res, next) => {
    User.find({ freelance: { $ne: null } }).then((users) => {
        res.send(users);
    }).catch((error) => {
        next(error);
    }
    );
};