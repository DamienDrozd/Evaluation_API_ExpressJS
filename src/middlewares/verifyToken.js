const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

function verifyToken (req, res, next) {

  const token = req.headers["authorization"];
  if (!token) {
    console.log("No token provided !")
    return res.status(403).send({
      auth: false,
      token: null,
      message:"No token provided !"
    })
  }
  jwt.verify(token, process.env.JWT_SECRET, function (error, jwtDecoded) {
    if (error) {
      console.log("Unauthorized !")
      return res.status(401).send({
        auth: false,
        token: null,
        message:"Unauthorized !"
      })
    }
    User.findById(jwtDecoded.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'user not found',
        });
      }
    })
    console.log("Auth success !")
    req.userToken = jwtDecoded;
    next();
  })
}

module.exports = verifyToken;
