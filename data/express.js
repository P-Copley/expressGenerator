const fs = require('fs');
const path = require('path');

exports.app = fs.readFileSync(path.join(__dirname, '..', 'templates/app.js'));
exports.listen = fs.readFileSync(path.join(__dirname, '..', 'templates/listen.js'));
exports.api = fs.readFileSync(path.join(__dirname, '..', 'templates/api.js'));
exports.appSpec = fs.readFileSync(path.join(__dirname, '..', 'templates/appSpec.js'));
