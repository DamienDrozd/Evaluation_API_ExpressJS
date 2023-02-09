function verifyIsAdmin(req, res, next) {
  console.log(req.userToken);
  if (!req.userToken.isAdmin) {
    console.log('you must be Admin');
    return res.status('401').send({
      auth: false,
      message: 'you must be Admin',
    });
  }
  console.log('you are Admin');
  next();
}

module.exports = verifyIsAdmin; 