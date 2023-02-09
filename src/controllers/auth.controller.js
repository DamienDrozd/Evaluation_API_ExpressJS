const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Company = require('../models/company.model');
const MailClient = require('../functions/mail');

exports.register_freelance = async (req, res, next) => {
    console.log(req.body);
    try {
        const mail = new MailClient();
        const hashedPassword = bcrypt.hashSync(req.body.password, 11);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            city: req.body.city,
            postcode: req.body.postCode,
            phone: req.body.phone,
            isAdmin: false,
            freelance: {
                price : req.body.price,
                experience_years: req.body.price
            }, 
            company: null
        });

        console.log(mail);

        
        newUser.save()
        .then((user) => {
            let userToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
                isFreelance: user.freelance != null,
                isCompany: user.company != null,
            },
            process.env.JWT_SECRET
            );
            mail.send(newUser.email, "Bienvenue sur Freelance", "Vous êtes maintenant inscrit sur notre site, vous pouvez dès à présent vous connecter et profiter de nos services");
            res.send({
                message: "User " + user._id + " successfully registered",
                auth: true,
                token: userToken,
                userId: user._id,
            });
        }).catch((err) => {
            next(err);
        });
    } catch (error) { 
        next(error);

    }
};

exports.register_company = async (req, res, next) => {
    console.log(req.body);
    try {   
        const mail = new MailClient();
        const hashedPassword = bcrypt.hashSync(req.body.password, 11);
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            address: req.body.address,
            city: req.body.city,
            postcode: req.body.postCode,
            phone: req.body.phone,
            isAdmin: false,
            // freelance: null,
        });
        newUser.freelance = null;
        console.log("newUser = ", newUser);
        const newCompany = new Company({ 
            name: req.body.companyName, 
            status: req.body.companyStatus,
            siret: req.body.companySiret,
            address: req.body.companyAddress,
            city: req.body.companyCity,
            postcode: req.body.companyPostCode, 
        });
        console.log(newCompany);
        Company.findOne({"siret" : req.body.companySiret}).then( async (company) =>
        {
            if (!company) {
                company = await newCompany.save();
            }
            console.log("user company = ", company);
            newUser.company = company._id;
            console.log("newUser = ", newUser);
            newUser.save()
            .then((user) => {
                const isFreelance = user.freelance != null;
                const isCompany = user.company != null;
                console.log("isFreelance = ", isFreelance);
                console.log("isCompany = ", isCompany);
                let userToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                    isFreelance: isFreelance,
                    isCompany: isCompany, 
                },
                process.env.JWT_SECRET
                );
                mail.send(user.email, "Bienvenue sur Freelance", "Vous êtes maintenant inscrit sur notre site, vous pouvez dès à présent vous connecter et profiter de nos services")
                res.send({
                message: "User " + user._id + " successfully registered",
                auth: true,
                token: userToken,
                userId: user._id,
                }); 
            }).catch((error) => {
                console.log(error);
                next(error);
            });
        }).catch((error) => {
            console.log(error);
            next(error);
        }); 
    } catch (error) { 
        next(error);
    }
};

exports.login = async (req, res, next) => {
  console.log(req.body.email)
    try {
        User.findOne({ email: req.body.email })
            .then((user) => {
            if (!user) {
                return res
                .status(404)
                .send({ message: "User Not found with email " + req.body.email });
            }
            let passwordIsValid = bcrypt.compareSync(req.body.password,user.password);
            if (!passwordIsValid) {
                return res.status(401).send({
                message: "Password Is Not valid",
                auth: false,
                });
            }
            const isFreelance = user.freelance != null;
            const isCompany = user.company != null;
            console.log("isFreelance = ", isFreelance);
            console.log("isCompany = ", isCompany);
            let userToken = jwt.sign(
                {
                    id: user._id,
                    isAdmin: user.isAdmin,
                    isFreelance: isFreelance,
                    isCompany: isCompany, 
                },
                process.env.JWT_SECRET
            );
            res.send({
                message: "User " + user._id + " successfully logged in",
                auth: true,
                userId: user._id,
                token: userToken,
            });
            })
        .catch((error) => {
        next(error)
        });
    } catch (error) {
        next(error);
    }
};

exports.change_password = async (req, res, next) => {
    return res.send("success");
};

exports.forgot_password = async (req, res, next) => {
    return res.send("success");
};