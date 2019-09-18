const fs = require('fs');
const path = require('path');

exports.app = fs.readFileSync(path.join(__dirname, '..', 'templates/app.js'));
exports.listen = fs.readFileSync(
  path.join(__dirname, '..', 'templates/listen.js')
);
exports.api = fs.readFileSync(path.join(__dirname, '..', 'templates/api.js'));
exports.appSpec = fs.readFileSync(
  path.join(__dirname, '..', 'templates/appSpec.js')
);
exports.config = fs.readFileSync(
  path.join(__dirname, '..', 'templates/config.js')
);
exports.gitignore = fs.readFileSync(
  path.join(__dirname, '..', 'templates/gitignore.txt')
);
exports.errorControllers = fs.readFileSync(
  path.join(__dirname, '..', 'templates/errors.js')
);
