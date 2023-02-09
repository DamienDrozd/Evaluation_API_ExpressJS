const { faker } = require('@faker-js/faker');
faker.setLocale('fr')
const User = require("../models/user.model");
const axios = require('axios');
const Job = require('../models/skill.model');
const Skill = require('../models/job.model');

// import { faker } from '@faker-js/faker/locale/de';
 


const createRandomUser = () => {
  Job.find().then((jobs) => {
    Skill.find().then((skills) => {
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
        price : faker.datatype.number({ min: 100, max: 1000}),
        experience_years: faker.datatype.number({ min: 1, max: 100}),
        skills: jobs,
        jobs: skills,
        company: null,
        isFake: true
      };
    })
  })
}



for (let i = 0; i < 5; i++){
  createRandomUser()
      // let link = 'http://localhost:3000/api/auth/register/freelance/';
      // axios.post(link, user)
 
}   