"use strict";

var _require = require('@faker-js/faker'),
  faker = _require.faker;
faker.setLocale('fr');
var Job = require("../models/user.model");
var axios = require('axios');
var createRandomJob = function createRandomJob() {
  return {
    name: faker.name.jobTitle()
  };
};
for (var i = 0; i < 15; i++) {
  console.log(createRandomJob());
  var job = createRandomJob();
  var link = 'http://localhost:3000/api/job/';
  axios.post(link, job, {
    headers: {
      authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTIyZjI5OTc3MGIxYmYxMDZmNjM4NyIsImlzQWRtaW4iOnRydWUsImlzRnJlZWxhbmNlIjp0cnVlLCJpc0NvbXBhbnkiOmZhbHNlLCJpYXQiOjE2NzU5NzU1OTh9.TJarqXF42nGfT7L-TDPFMsOM5bsKW2cewf7u48xdj94"
    }
  });
}