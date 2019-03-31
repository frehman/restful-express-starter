const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app
  .use(require('./src/controllers'))
  .get('/', (req, res) => {
    res.send('Hello World API.');
  })
  .listen(port, () => {
    console.log('Running on port', port);
  });

module.exports = app;
