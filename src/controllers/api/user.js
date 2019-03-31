const router = require('express').Router();
const User = require('../../models/User');

// prettier-ignore
router
  .get('/', (req, res) => {
    User.findAll().then(users => {
        res.status(200).json(users);
      });
  })
  .post('/', (req, res) => {
    User.create(req.body).then(newUser => {
      res.status(200).send(`New user's auto-generated ID is ${newUser.id}`);
    });
  });

module.exports = router;
