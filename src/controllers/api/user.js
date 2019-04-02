const router = require('express').Router();
const User = require('../../models/User');
const log = require('../../logger');

router
  .get('/', (req, res) => {
    User.findAll({
      /** When return all data, only show id, first name and last name. */
      attributes: ['id', 'first_name', 'last_name']
    }).then(users => {
      log.info(
        /** @todo If returning too many, limit the number of returned records. */
        { itemCount: Object.keys(users).length },
        `Count of number of items returned`
      );
      /** To add HATEAOS, need to add a new property to every record. */
      const returnedUsers = users.map(user => {
        const returnedUser = user.toJSON();
        returnedUser.links = {};
        returnedUser.links.details = `http://${req.headers.host}/api/user/${
          user.id
        }`;
        return returnedUser;
      });
      res.status(200).json(returnedUsers);
    });
  })
  .get('/:userid', (req, res) => {
    User.findByPk(req.params.userid).then(user => {
      res.status(200).json(user);
    });
  })
  .post('/', (req, res) => {
    User.create(req.body).then(newUser => {
      res.status(200).send(`New user's auto-generated ID is ${newUser.id}`);
    });
  });

module.exports = router;
