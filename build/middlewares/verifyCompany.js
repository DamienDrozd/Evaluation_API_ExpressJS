"use strict";

function verifyIsCompany(req, res, next) {
  console.log(req.userToken);
  if (!req.userToken.isCompany) {
    return res.status('401').send({
      auth: false,
      message: 'you must have company role to access this route'
    });
  }
  next();
}
module.exports = verifyIsCompany;