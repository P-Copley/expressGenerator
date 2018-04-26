const fs = require('fs');
const path = require('path');
console.log(process.argv);
console.log(process.argv0);


exports.app = fs.readFileSync(path.join(__dirname, '..', 'templates/app.js'));
exports.listen = fs.readFileSync(path.join(__dirname, '..', 'templates/listen.js'));
