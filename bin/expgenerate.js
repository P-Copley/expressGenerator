#! /usr/bin/env node

console.log(process.argv)
console.log(process.argv0)
const generate = require('../lib/generator')
generate('testing')