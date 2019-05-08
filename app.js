const express = require('express');
const helmet = require('helmet');
const log = require('./src/logger');

/**
 * The `heroku local` command usually sets the port to 5000
 */
const port = process.env.PORT || 3000;
const app = express();

/**
 * Setup the express server
 * ./src/controllers/index sets up the routes
 */
app
  .use(require('./src/controllers'))
  .use(helmet())
  .get('/', (req, res) => {
    res.send('Hello World API.');
  })
  .listen(port, () => {
    log.info({ port: port }, 'Express port number');
  });

module.exports = app;
