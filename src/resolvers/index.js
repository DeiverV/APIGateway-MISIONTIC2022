const lodash = require('lodash');
const authResolver = require('./auth_resolver');

const resolvers = lodash.merge(authResolver);

module.exports = resolvers