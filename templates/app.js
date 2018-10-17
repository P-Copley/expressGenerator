const app = require('express')();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api.js');

app.use(bodyParser.json());

app.use('/api', apiRouter);

app.all('/*', (req, res, next) => {
  next({ status: 404, msg: 'Route not found' });
});

app.use((err, req, res, next) => {
  if (err.status === 400)
    res.status(400).send({ msg: err.msg || 'Bad request' });
  else next(err);
});

app.use((err, req, res, next) => {
  if (err.status === 404)
    res.status(404).send({ msg: err.msg || 'Resource not found' });
  else next(err);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal Server Error' });
});

module.exports = app;
