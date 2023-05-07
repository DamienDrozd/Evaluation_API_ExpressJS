"use strict";

var _require = require('@faker-js/faker'),
  faker = _require.faker;
faker.setLocale('fr');
var Skill = require("../models/skill.model");
var axios = require('axios');
var createRandomSkill = function createRandomSkill() {
  return {
    name: faker.word.adjective()
  };
};
for (var i = 0; i < 5; i++) {
  console.log(createRandomSkill());
  var skill = createRandomSkill();
  var link = 'http://localhost:3000/api/skill/';
  axios.post(link, skill, {
    headers: {
      authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTIyZjI5OTc3MGIxYmYxMDZmNjM4NyIsImlzQWRtaW4iOnRydWUsImlzRnJlZWxhbmNlIjp0cnVlLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE2NzU5NzU1OTh9.TJarqXF42nGfT7L-TDPFMsOM5bsKW2cewf7u48xdj94"
    }
  });
}