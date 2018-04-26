const PORT = process.env.PORT || 3000;
const app = require('./app');

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Listening on port: ${PORT}`);
})