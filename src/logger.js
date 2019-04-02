const bunyan = require('bunyan');

const log = bunyan.createLogger({ name: 'generic' });

module.exports = log;
