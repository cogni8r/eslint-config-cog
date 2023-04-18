// Last reviewed eslint version - 6.7.2.

// all eslint-rules ara considered as on, there are only 'off' and non-default eslint-rules

module.exports = {
  rules: {
    // Possible Errors - https://eslint.org/docs/rules/#possible-errors.
    'getter-return': 'off', // Typescript.
    'no-cond-assign': ['error', 'always'], // Default options have been changed.
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-inner-declarations': ['error', 'both'], // Default options have been changed.
    'no-irregular-whitespace': [
      // Default options have been changed.
      'error',
      {
        skipStrings: false,
        skipComments: false,
        skipRegExps: false,
        skipTemplates: false,
      },
    ],
    'no-setter-return': 'off', // Typescript.
    'no-unexpected-multiline': 'off', // Prettier.
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }], // Default options have been changed.
    'use-isnan': ['error', { enforceForSwitchCase: true, enforceForIndexOf: true }], // Default options have been changed.
    'valid-typeof': 'off', // Typescript.

    // Best Practices - https://eslint.org/docs/rules/#best-practices.
    'accessor-pairs': 'off', // Useless.
    'array-callback-return': 'off', // Typescript.
    'class-methods-use-this': 'off', // Not very good for services and DI.
    complexity: 'off', // The most important thing here is humand readability and good abastractions, not complexity.
    'consistent-return': 'off', // Typescript.
    'dot-location': ['error', 'property'], // Default options have been changed.
    eqeqeq: ['error', 'always', { null: 'ignore' }], // Default options have been changed.
    'grouped-accessor-pairs': ['error', 'getBeforeSet'], // Default options have been changed.
    'max-classes-per-file': 'off', // Useless.
    'no-div-regex': 'off', // It is not very actual in modern IDE with syntax highlighting.
    'no-else-return': 'off', // Sometimes else helps to show another path of execution and it's become more readable.
    'no-eq-null': 'off', // Not strict comparing to null can be useful to check value on both: null and undefined
    // it's not always possible to fix everything now and sometimes there are an idea and it's is always better to
    // be able to add clear comment about that.
    'no-warning-comments': 'off',
    radix: ['error', 'as-needed'], // Default options have been changed.

    // Strict mode.
    strict: ['error', 'never'], // Default options have been changed.

    // Variables - https://eslint.org/docs/rules/#variables.
    'init-declarations': 'off', // Typescript.
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }], // Default options have been changed.
    'no-undef': 'off', // Typescript (also https://github.com/typescript-eslint/typescript-eslint/issues/662).
    'no-undef-init': 'off', // Conflicts with rule '@typescript-eslint/init-declarations'.
    'no-undefined': 'off', // Useless.
    'no-unused-vars': 'off', // Typescript.
    'no-use-before-define': 'off', // Typescript.

    // Stylistic Issues - Stylistic Issues.

    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    ], // Useless.
    'func-name-matching': 'off', // Useless.
    'func-names': 'off', // Useless.
    'func-style': 'off', // Useless.
    'id-blacklist': 'off', // Useless.
    'id-length': 'off', // Useless.
    'id-match': 'off', // Useless.
    'line-comment-position': 'off', // Useless.
    'lines-around-comment': 'off', // Prettier.
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // Default options have been changed.

    // all these max-* rules are not very good in all situations. Good abstractions are more important.
    'max-depth': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',

    'multiline-comment-style': 'off', // Useless.
    'no-bitwise': 'off', // Useless.
    'no-continue': 'off', // Useless.
    'no-inline-comments': 'off', // Useless.
    'no-mixed-operators': 'off', // Useless.
    'no-new-object': 'off', // Useless.
    'no-plusplus': 'off', // Useless.
    'no-restricted-syntax': 'off', // There are no restricted syntax.
    'no-tabs': 'off', // Prettier.
    'no-ternary': 'off', // Useless.
    'no-underscore-dangle': 'off', // Useless.
    'one-var': ['error', 'never'], // Default options have been changed.
    'operator-assignment': 'off', // Useless.
    'padding-line-between-statements': 'off', // Useless.
    'prefer-exponentiation-operator': 'off', // Useless.
    'prefer-object-spread': 'off', // Useless.
    quotes: 'off', // Prettier.
    'sort-keys': 'off', // Useless.
    'sort-vars': 'off', // Useless.

    // ECMAScript 6 - https://eslint.org/docs/rules/#ecmascript-6.
    'arrow-body-style': 'off', // Useless.
    'constructor-super': 'off', // Typescript.
    'no-const-assign': 'off', // Typescript.
    'no-dupe-class-members': 'off', // Typescript.
    'no-duplicate-imports': 'off', // Problems with Typescript `import type`.
    'no-new-symbol': 'off', // Typescript.
    'no-restricted-exports': 'off', // Typescript.
    'no-restricted-imports': 'off', // Nothing to restrict.
    'no-this-before-super': 'off', // Typescript.
    'no-useless-computed-key': 'off', // Useless.
    'object-shorthand': 'off', // Useless.
    'prefer-arrow-callback': 'off', // Useless.
    'prefer-destructuring': 'off', // Useless.
    'sort-imports': 'off', // Useless.
    'no-console': 'off',
  },
};
