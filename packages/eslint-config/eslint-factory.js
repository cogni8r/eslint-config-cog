function getConfig(
  { es6 = true, node = false, browser = false, disableTypes = true } = {
    es6: true,
    node: false,
    browser: false,
  },
  extendRules = [],
  settings = {},
) {
  const extendedRules = [
    'eslint:all',
    './eslint-rules/base.js',
    'plugin:@typescript-eslint/all',
    './eslint-rules/typescript.js',
    'prettier',
    './eslint-rules/import.js',
    './eslint-rules/jsdoc.js',
  ];

  if (node) {
    extendedRules.push('./eslint-rules/node.js');
  }

  if (browser) {
    extendedRules.push('./eslint-rules/browser.js');
  }

  if (disableTypes) {
    extendedRules.push('./eslint-rules/typescript-disable-types.js');
  }

  extendedRules.push(...extendRules);

  return {
    extends: ['eslint:all', './eslint-rules/base.js', 'prettier', './eslint-rules/node.js'],
    parserOptions: {
      ecmaVersion: 2018,
    },
    env: {
      es6,
      node,
    },
    plugins: ['@typescript-eslint', 'import', 'node', 'jsdoc'],
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 2018,
          sourceType: 'module',
        },
        extends: extendedRules,
        rules: {},
        settings: {
          jsdoc: {
            mode: 'typescript',
          },
        },
      },
      {
        files: ['*.test.ts'],
        rules: {
          '@typescript-eslint/no-magic-numbers': 'off',
          '@typescript-eslint/no-non-null-assertion': 'off',
        },
      },
    ],
    settings,
  };
}

module.exports = getConfig;
