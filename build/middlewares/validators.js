"use strict";

var _require = require('express-validator'),
  body = _require.body,
  validationResult = _require.validationResult;
exports.checkEmail = [body('email').isEmail().withMessage('Email format not valid')];
exports.checkIdentity = [body('firstName').isAlphanumeric().withMessage('FirstName format is not valide'), body('lastName').isAlphanumeric().withMessage('lastName format is not valide')];
exports.checkPassword = [body('password').notEmpty().isLength({
  min: 11,
  max: 30
}).matches(/^[A-Za-z0-9 .,'!&(§è!çà)]+$/)];
exports.validation = function (req, res, next) {
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array()
    });
  }
  next();
};