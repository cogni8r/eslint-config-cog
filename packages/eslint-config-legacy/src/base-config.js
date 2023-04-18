function getBaseConfig(mode) {
  const plugins = ['@typescript-eslint'];
  const configurations = [
    'eslint:all',
    './src/rules/common.js',
    'plugin:@typescript-eslint/all',
    './src/rules/typescript.js',
  ];

  if (mode === 'react') {
    plugins.push('react', 'jsx-a11y');
    configurations.push(
      'plugin:react/all',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      './src/rules/react.js',
    );
  }

  if (mode === 'node') {
    configurations.push('plugin:n/recommended-module', 'plugin:security/recommended', './src/rules/node.js');
  }

  configurations.push('prettier');

  return {
    extends: configurations,
    ignorePatterns: ['*.{js, cjs, mjs, jsx}'],
    parser: '@typescript-eslint/parser',
    plugins,
  };
}

module.exports = getBaseConfig;
