#! /usr/bin/env node

const generate = require('../lib/generator');
generate(process.argv[2] || '.');