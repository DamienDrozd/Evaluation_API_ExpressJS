const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const errorHandler = require('../middlewares/errorsHandling');

exports.register_freelance = async (req, res, next) => {
    console.log(req.body);
    try {
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
        
        await newUser.save()
        .then((user) => {
            let userToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET
            );
            res.send({
                message: "User " + user._id + " successfully registered",
                auth: true,
                token: userToken,
                userId: user._id,
            });
        })  
    } catch (error) {
        next(error);

    }
};

exports.register_company = async (req, res, next) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 11);
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        address: req.body.streetAddress,
        city: req.body.city,
        postcode: req.body.postCode,
        phone: req.body.phone,
        isAdmin: false,
        company: null
    });

    const newCompany = new Company({ 
        name: req.body.companyName, 
        status: req.body.companyStatus,
        siret: req.body.companySiret,
        address: req.body.companyAddress,
        city: req.body.companyCity,
        postcode: req.body.companyPostCode, 
    });

    try {
        newCompany.save().then((company) => {
            newUser.company = company._id;
            newUser.save()
            .then((user) => {
                let userToken = jwt.sign(
                {
                    id: user._id,
                },
                process.env.JWT_SECRET
                );
                res.send({
                message: "User " + user._id + " successfully registered",
                auth: true,
                token: userToken,
                userId: user._id,
                });
            }) 
        })
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
            let userToken = jwt.sign(
                {
                id: user._id,
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