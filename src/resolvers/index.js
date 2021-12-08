const lodash = require('lodash');
const authResolver = require('./auth_resolver');
const equipResolver = require('./equip_resolver');

const resolvers = lodash.merge(authResolver, equipResolver);

module.exports = resolvers