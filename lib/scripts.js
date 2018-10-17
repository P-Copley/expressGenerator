const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const mkFile = promisify(fs.writeFile);

function addScripts(projectName) {
  return readFile(`${projectName}/package.json`, 'utf-8').then(JSONContents => {
    const parsedJSON = JSON.parse(JSONContents);
    parsedJSON.scripts = {
      test: 'mocha spec',
      dev: 'nodemon listen.js',
      start: 'node listen.js'
    };
    return mkFile(
      `${projectName}/package.json`,
      JSON.stringify(parsedJSON, null, 2)
    );
  });
}

module.exports = addScripts;
