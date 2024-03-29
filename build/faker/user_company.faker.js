"use strict";

var _require = require('@faker-js/faker'),
  faker = _require.faker;
faker.setLocale('fr');
var User = require("../models/user.model");
var Company = require("../models/company.model");
var axios = require('axios');
var skillModel = require('../models/skill.model');
var jobModel = require('../models/job.model');

// import { faker } from '@faker-js/faker/locale/de';

var createRandomUser = function createRandomUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postCode: faker.address.zipCode(),
    phone: faker.phone.number(),
    companyName: faker.company.companyName(),
    companyStatus: "SARL",
    companySiret: faker.random.numeric(14),
    companyAddress: faker.address.streetAddress(),
    companyCity: faker.address.city(),
    companyPostCode: faker.address.zipCode()
  };
};
var createRandomMission = function createRandomMission() {
  return {
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    price: faker.datatype.number({
      min: 100,
      max: 1000
    }),
    date: {
      start: faker.date.past(),
      stop: faker.date.future()
    },
    mission_status: "En cours",
    skills: [skillModel.find().limit(5)],
    jobs: [jobModel.find().limit(5)]
  };
};
for (var i = 0; i < 5; i++) {
  var randomUser = createRandomUser();
  console.log(randomUser);
  var link = 'http://localhost:3000/api/auth/register/company';
  axios.post(link, randomUser);
}