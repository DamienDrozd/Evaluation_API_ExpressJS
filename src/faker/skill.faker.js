const { faker } = require('@faker-js/faker');
faker.setLocale('fr')
const Skill = require("../models/skill.model");
const axios = require('axios');




const createRandomSkill = () => {
  return {
    name: faker.word.adjective(),
  };
}



for (let i = 0; i < 5; i++){
    console.log(createRandomSkill());
    const skill = new Skill(createRandomSkill());
    let link = 'http://localhost:3001/api/skill';
    // axios.post(link, skill)
 
} 