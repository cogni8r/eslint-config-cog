// Last reviewed eslint version - 11.1.0.
// https://github.com/mysticatea/eslint-plugin-node

module.exports = {
  rules: {
    // Possible Errors.
    'node/handle-callback-err': 'error',
    'node/no-callback-literal': 'error',
    'node/no-exports-assign': 'error',
    'node/no-path-concat': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    // 'node/no-unsupported-features/es-syntax': 'error', - disabled because of transpilers.
    'node/no-unsupported-features/node-builtins': 'error',

    // Best Practices.
    'node/no-deprecated-api': 'error',

    // Stylistic Issues.
    'node/no-sync': 'error',

    'node/prefer-global/buffer': 'error',
    'node/prefer-global/console': 'error',
    'node/prefer-global/process': 'error',
    'node/prefer-global/text-decoder': 'error',
    'node/prefer-global/text-encoder': 'error',
    'node/prefer-global/url-search-params': 'error',
    'node/prefer-global/url': 'error',
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
  },
};
