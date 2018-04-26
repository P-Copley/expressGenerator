process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = require('express')();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.js');

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.get('/*', (req, res, next) => {
  next({ status : 404 });
});

app.use((err, req, res, next) => {
  if (err.status === 400) res.status(400).send({message: err.message || 'Bad request'});
  if (err.status === 404) res.status(404).send({message: err.message || 'Page not found'});
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send({ message : 'Internal Server Error'});
});

module.exports = app;