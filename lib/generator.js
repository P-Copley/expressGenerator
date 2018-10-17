const fs = require('fs');
const { promisify } = require('util');
const mkDir = promisify(fs.mkdir);
const mkFile = promisify(fs.writeFile);
const {
  app,
  listen,
  api,
  appSpec,
  config,
  gitignore
} = require('../data/express');
const install = require('./install.js');
const addScripts = require('./scripts.js');

function generate(projectName) {
  mkDir(`${projectName}`)
    .then(() => {
      console.log('Installing files...');
      return Promise.all([
        mkDir(`${projectName}/controllers`),
        mkDir(`${projectName}/models`),
        mkDir(`${projectName}/routes`),
        mkDir(`${projectName}/spec`),
        mkDir(`${projectName}/config`)
      ]);
    })
    .then(() => {
      return Promise.all([
        mkFile(`${projectName}/app.js`, app),
        mkFile(`${projectName}/listen.js`, listen),
        mkFile(`${projectName}/routes/api.js`, api),
        mkFile(`${projectName}/spec/app.spec.js`, appSpec),
        mkFile(`${projectName}/config/index.js`, config),
        mkFile(`${projectName}/.gitignore`, gitignore)
      ]);
    })
    .then(() => {
      console.log('Installing dependacies...');
      return install(
        `cd ${projectName} && npm init -y && npm i express body-parser --save && npm i -D chai supertest`
      );
    })
    .then(() => {
      console.log('adding scripts...');
      return addScripts(projectName);
    })
    .then(() => {
      console.log('All done!');
    })
    .catch(err => {
      console.log(`Error in making the project: ${err}`);
    });
}

function rootGenerate() {
  console.log('Installing files...');
  Promise.all([
    mkDir(`controllers`),
    mkDir(`models`),
    mkDir(`routes`),
    mkDir(`spec`),
    mkDir(`config`)
  ])
    .then(() => {
      return Promise.all([
        mkFile(`app.js`, app),
        mkFile(`listen.js`, listen),
        mkFile(`routes/api.js`, api),
        mkFile(`spec/app.spec.js`, appSpec),
        mkFile(`config/index.js`, config),
        mkFile(`$.gitignore`, gitignore)
      ]);
    })
    .then(() => {
      console.log('Installing dependacies...');
      return install(
        `npm init -y && npm i -s express body-parser && npm i -D chai supertest`
      );
    })
    .catch(err => {
      console.log(`Error in making the project: ${err}`);
    });
}

module.exports = { generate, rootGenerate };
