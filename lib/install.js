const { exec } = require('child_process');

function install(command) {
  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) reject(err);
      else resolve();
    })
  })
}

module.exports = install;