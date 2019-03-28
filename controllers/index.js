const router = require('express').Router();
const bodyParser = require('body-parser');

// prettier-ignore
router
  .use(bodyParser.json())
  .use('/api/info', require('./api/info'));

module.exports = router;
