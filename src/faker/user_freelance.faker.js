const { faker } = require('@faker-js/faker');
faker.setLocale('fr')
const User = require("../models/user.model");
const axios = require('axios');
const skillModel = require('../models/skill.model');
const jobModel = require('../models/job.model');

// import { faker } from '@faker-js/faker/locale/de';
 


const createRandomUser = () => {
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
    freelance: {
        price : faker.datatype.number({ min: 100, max: 1000}),
        experience_years: faker.datatype.number({ min: 1, max: 100}),
        skills: [skillModel.find().limit(5)],
        jobs: [jobModel.find().limit(5)],
    },
    company: null,
    isFake: true
  };
}



for (let i = 0; i < 5; i++){
    console.log(createRandomUser());
    const user = new User(createRandomUser());
    let link = 'http://localhost:3001/api/user';
    // axios.post(link, user)
 
} 