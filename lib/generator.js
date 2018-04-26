const fs = require('fs');
const {promisify} = require('util');
const mkDir = promisify(fs.mkdir);
const mkFile = promisify(fs.writeFile);
const {app, listen, api, appSpec} = require('../data/express');
const install = require('./install.js');

function generate(projectName) {
  mkDir(`${projectName}`)
  .then(() => {
    return Promise.all([mkDir(`${projectName}/controllers`), mkDir(`${projectName}/models`), mkDir(`${projectName}/routes`), mkDir(`${projectName}/spec`)])
  })
  .then(() => {
    return Promise.all([mkFile(`${projectName}/app.js`, app), mkFile(`${projectName}/listen.js`, listen), mkFile(`${projectName}/routes/api.js`, api), mkFile(`${projectName}/spec/app.spec.js`, appSpec)])
  })
  .then(() => {
    return install(`cd ${projectName} && npm init -y && npm i -s express body-parser && npm i -D chai supertest`)
  })
  .catch(err => {
    console.log(`Error in making the project: ${err}`)
  });
}


module.exports = generate