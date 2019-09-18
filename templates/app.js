const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js');
const { handleCustomErrors, handle500s } = require('./controllers/errors');

app.use(express.json());

app.use('/api', apiRouter);

app.all('/*', (req, res, next) => {
  next({ status: 404, msg: 'Route not found' });
});

app.use(handleCustomErrors);
app.use(handle500s);

module.exports = app;
