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
    const skill = createRandomSkill()
    let link = 'http://localhost:3000/api/skill/';
    axios.post(link, skill, {headers: {authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTIyZjI5OTc3MGIxYmYxMDZmNjM4NyIsImlzQWRtaW4iOnRydWUsImlzRnJlZWxhbmNlIjp0cnVlLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE2NzU5NzU1OTh9.TJarqXF42nGfT7L-TDPFMsOM5bsKW2cewf7u48xdj94"}})
 
}        