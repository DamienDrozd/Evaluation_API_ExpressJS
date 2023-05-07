"use strict";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv').config();
var apiRouter = require('./routes');
var errorHandler = require('./middlewares/errorsHandling');
var cors = require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
var mongoose_url = "mongodb+srv://".concat(process.env.MONGO_DB_USER, ":").concat(process.env.MONGO_DB_PASSWORD).concat(process.env.MONGO_DB_CLUSTER, "/?retryWrites=true&w=majority");
mongoose.set('strictQuery', false);
mongoose.connect(mongoose_url).then(function () {
  console.log('successfully connect to database');
})["catch"](function (err) {
  return console.log("error whith db connection : ", err);
});
app.use('/api/', apiRouter);
app.use(errorHandler);
app.use(function (req, res, next) {
  console.log('Requête reçue !');
  console.log(req.body);
});

// Méthod launch app
app.listen(process.env.PORT, function () {
  console.log('Server launch on port : ', process.env.PORT);
});