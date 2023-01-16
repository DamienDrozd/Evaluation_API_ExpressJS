const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const errorHandler = require('../middlewares/errorsHandling');

exports.register_freelance = async (req, res, next) => {
    return res.send("success");
};

exports.login = (req, res, next) => {
    return res.send("success");
};

exports.register_company = async (req, res, next) => {
    return res.send("success");
};


exports.change_password = async (req, res, next) => {
    return res.send("success");
};

exports.forgot_password = async (req, res, next) => {
    return res.send("success");
};