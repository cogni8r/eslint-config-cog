// 8.36.0

const possibleProblems = {
  'array-callback-return': 'off',
  'no-unused-private-class-members': 'off',
};

const suggestions = {
  camelcase: 'off',
  'capitalized-comments': 'off',
  'class-methods-use-this': 'off',
  complexity: 'off',
  // 'consistent-return': 'off',
  'consistent-this': 'off',
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'func-name-matching': 'off',
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'init-declarations': 'off',
  'max-classes-per-file': 'off',
  'max-depth': 'off',
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': ['error', 4],
  'max-statements': 'off',
  'multiline-comment-style': 'off',
  'no-bitwise': 'off',
  'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  'no-continue': 'off',
  'no-else-return': 'off',
  'no-eq-null': 'off',
  'no-extra-semi': 'off',
  'no-implicit-coercion': 'off',
  'no-inline-comments': 'off',
  'no-labels': 'off',
  'no-lonely-if': 'off',
  'no-magic-numbers': 'off',
  'no-param-reassign': 'off',
  'no-plusplus': 'off',
  'no-restricted-exports': 'off',
  'no-restricted-globals': 'off',
  'no-restricted-imports': 'off',
  'no-restricted-properties': 'off',
  'no-restricted-syntax': 'off',
  'no-ternary': 'off',
  'no-undef-init': 'off',
  'no-undefined': 'off',
  'no-underscore-dangle': 'off',
  'no-warning-comments': 'off',
  'object-shorthand': ['error', 'methods'],
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': 'off',
  'prefer-const': ['error', { destructuring: 'all' }],
  'prefer-destructuring': 'off',
  'quote-props': 'off',
  radix: 'off',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'sort-vars': 'off',
  strict: 'off',
  'vars-on-top': 'off',
};

export default { ...possibleProblems, ...suggestions };
