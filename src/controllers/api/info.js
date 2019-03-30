const router = require('express').Router();
var User = require('../../models/User');

// prettier-ignore
router
  .get('/', (req, res) => {
    res.json({ first: 'Value1' });
  })
  .get('/users', (req, res) => {
    User.findAll().then(users => {
        res.status(200).json(users);
      });
  })
  .post('/user', (req, res) => {
    User.create(req.body).then(newUser => {
      res.status(200).send(`New user's auto-generated ID is ${newUser.id}`);
    });
  })

module.exports = router;
