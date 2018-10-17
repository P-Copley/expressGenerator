const NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  test: {},
  development: {},
  production: {}
};

module.exports = config[NODE_ENV];
