"use strict";

var _require = require('@faker-js/faker'),
  faker = _require.faker;
faker.setLocale('fr');
var User = require("../models/user.model");
var axios = require('axios');
var Job = require('../models/skill.model');
var Skill = require('../models/job.model');

// import { faker } from '@faker-js/faker/locale/de';

var createRandomUser = function createRandomUser() {
  Job.find().then(function (jobs) {
    Skill.find().then(function (skills) {
      console.log(jobs);
      console.log(skills);
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        postcode: faker.address.zipCode(),
        phone: faker.phone.number(),
        isAdmin: false,
        price: faker.datatype.number({
          min: 100,
          max: 1000
        }),
        experience_years: faker.datatype.number({
          min: 1,
          max: 100
        }),
        skills: jobs,
        jobs: skills,
        company: null,
        isFake: true
      };
    });
  });
};
for (var i = 0; i < 5; i++) {
  createRandomUser();
  // let link = 'http://localhost:3000/api/auth/register/freelance/';
  // axios.post(link, user)
}