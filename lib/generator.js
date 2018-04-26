const fs = require('fs');
const {promisify} = require('util');
const mkDir = promisify(fs.mkdir);
const mkFile = promisify(fs.writeFile);
const {app, listen} = require('../data/express')

function generate(projectName) {
  mkDir(`${projectName}`)
  .then(() => {
    return Promise.all([mkDir(`${projectName}/controllers`), mkDir(`${projectName}/models`), mkDir(`${projectName}/routes`), mkDir(`${projectName}/spec`)])
  })
  .then(() => {
    return Promise.all([mkFile(`${projectName}/app.js`, app), mkFile(`${projectName}/listen.js`, listen)])
  })
  .catch(err => {
    console.log(`Error in making the project: ${err}`)
  });
}


module.exports = generate