const fs = require('fs');

exports.app = fs.readFileSync('templates/app.js')
exports.listen = fs.readFileSync('templates/listen.js')
