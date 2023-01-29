const { faker } = require('@faker-js/faker');
faker.setLocale('fr')
const Job = require("../models/user.model");
const axios = require('axios');




const createRandomJob = () => {
  return {
    name: faker.name.jobTitle() ,
  };
}



for (let i = 0; i < 5; i++){
    console.log(createRandomJob());
    const job = new Job(createRandomJob());
    // let link = 'http://localhost:3001/api/Job';
    // axios.post(link, job)
 
} 