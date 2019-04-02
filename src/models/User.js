const sequelize = require('./db');
const Sequelize = require('sequelize');

class user extends Sequelize.Model {}
user.init(
  {
    /**  @property or attributes */
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    }
  },
  {
    sequelize
    // options
  }
);

module.exports = user;
