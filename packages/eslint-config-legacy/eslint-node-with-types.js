const eslintConfigFactory = require('./eslint-factory.js');

module.exports = eslintConfigFactory({ node: true, disableTypes: false });
