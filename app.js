var express = require('express');

var port = process.env.PORT || 3000;

express()
  .get('/', (req, res) => {
    res.send('Welcome to the API.');
  })
  .listen(port, () => {
    console.log('Running on port', port);
  });
