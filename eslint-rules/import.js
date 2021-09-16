// Last reviewed eslint version - v2.20.1
// https://github.com/benmosher/eslint-plugin-import/releases

// all eslint-rules have been set explicitly

module.exports = {
  rules: {
    // Static analysis.
    'import/no-cycle': ['error', { ignoreExternal: true, maxDepth: 3 }],

    // Helpful warnings.
    'import/export': 'error',
    'import/no-mutable-exports': 'error',

    // Style guide.
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/no-default-export': 'error',
  },
};
