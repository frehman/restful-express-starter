const router = require('express').Router();

// prettier-ignore
router
  .get('/', (req, res, next) => {
      res.status(200).send('Bye');
  })

module.exports = router;
