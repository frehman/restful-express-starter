const router = require('express').Router();
var User = require('../../models/User');

// prettier-ignore
router
  .get('/', (req, res, next) => {
    res.json({first: 'Value1'});
    //   res.status(200).send('Bye');
  })
  .get('/users', (req, res, next) => {
    User.findAll().then(users => {
        res.json(users);
      });
  })

module.exports = router;
