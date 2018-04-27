#! /usr/bin/env node

const { generate, rootGenerate } = require('../lib/generator');

process.argv[2] ? generate(process.argv[2]) : rootGenerate();