const router = require('express').Router();
const bodyParser = require('body-parser');

// prettier-ignore
router
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/user', require('./api/user'));

module.exports = router;
