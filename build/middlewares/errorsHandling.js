"use strict";

var errorHandler = function errorHandler(err, req, res, next) {
  console.log("middleware error : ", err);
  if (!err.statusCode) {
    err.statusCode = 500;
  }
  res.status(err.statusCode).send({
    message: err.message,
    success: false,
    status: err.statusCode,
    stack: process.env.STACK
  });
};
module.exports = errorHandler;