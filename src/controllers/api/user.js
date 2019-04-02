const router = require('express').Router();
const User = require('../../models/User');
const log = require('../../logger');

// prettier-ignore
router
  .get('/', (req, res) => {
    User.findAll().then(users => {
      log.info({ itemCount:Object.keys(users).length }, `Count of number of items returned`);
      res.status(200).json(users);
    });
  })
  .post('/', (req, res) => {
    User.create(req.body).then(newUser => {
      res.status(200).send(`New user's auto-generated ID is ${newUser.id}`);
    });
  });

module.exports = router;
