const { faker } = require('@faker-js/faker');
faker.setLocale('fr')
const Job = require("../models/user.model");
const axios = require('axios');




const createRandomJob = () => {
  return {
    name: faker.name.jobTitle() ,
  };
}



for (let i = 0; i < 15; i++){
    console.log(createRandomJob());
    const job = createRandomJob()
    let link = 'http://localhost:3000/api/job/';
    axios.post(link, job, {headers: {authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTIyZjI5OTc3MGIxYmYxMDZmNjM4NyIsImlzQWRtaW4iOnRydWUsImlzRnJlZWxhbmNlIjp0cnVlLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE2NzU5NzU1OTh9.TJarqXF42nGfT7L-TDPFMsOM5bsKW2cewf7u48xdj94"}})
 
} 