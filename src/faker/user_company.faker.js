const { faker } = require('@faker-js/faker');
faker.setLocale('fr')
const User = require("../models/user.model");
const Company = require("../models/company.model");
const axios = require('axios');
const skillModel = require('../models/skill.model');
const jobModel = require('../models/job.model');

// import { faker } from '@faker-js/faker/locale/de';
 
const createRandomCompany = () => {
  return {
    name: faker.company.companyName(),
    status: "SARL",
    siret: faker.random.numeric(14),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    postcode: faker.address.zipCode(),


  };
}

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
    company: null,
    isFake: true
  };
}

const createRandomMission = () => {
  return {
    title: faker.name.jobTitle(),
    description: faker.lorem.paragraph(),
    price: faker.datatype.number({ min: 100, max: 1000}),
    date : {start : faker.date.past(), stop : faker.date.future()},
    mission_status: "En cours",
    skills: [skillModel.find().limit(5)],
    jobs: [jobModel.find().limit(5)],
    proposals: [{
        user : User.find().limit(1),
        status : "En cours",
        date : { type: Date, default: Date.now },
    }],
  };
}



for (let i = 0; i < 5; i++){
    let randomUser = createRandomUser();
    randomUser.company = createRandomCompany();
    console.log(randomUser);

    const user = new User(randomUser);
    // let link = 'http://localhost:3001/api/user';
    // axios.post(link, user)
 
} 