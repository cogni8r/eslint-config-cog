const eslintConfigFactory = require('./eslint-factory.js');

// TODO: not completed
module.exports = eslintConfigFactory(
  { node: false, browser: true, disableTypes: false },
  'plugin:vue/recommended',
  'prettier/vue',
  './eslint-rules/vue.js',
);
