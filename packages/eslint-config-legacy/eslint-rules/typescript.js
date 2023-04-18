// Typescript-eslint version - 2.10.0
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

module.exports = {
  rules: {
    // Supported Rules - https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules.

    '@typescript-eslint/array-type': 'off', // It's useful to use different styles of array for different situations.
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    // Useless - only for public fields of classes with literal type.
    // very narrow and complex rule.
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
    '@typescript-eslint/member-delimiter-style': 'off', // Prettier.
    '@typescript-eslint/method-signature-style': 'off', // Useless.
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },

      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require',
      },
    ],
    '@typescript-eslint/no-empty-interface': 'off', // Sometimes we need them to mark a class with an interface.
    // These classes can be useful with concept of DI and code generation.
    '@typescript-eslint/neous-class': 'off',
    '@typescript-eslint/no-inferrable-types': 'off', // It's better to declare variables with concrete types.
    '@typescript-eslint/no-type-alias': 'off', // It's better to be able to use different approaches to describe types.
    '@typescript-eslint/no-unnecessary-condition': [
      'error',
      {
        allowConstantLoopConditions: true,
      },
    ], // Default options have been changed.
    '@typescript-eslint/no-unnecessary-qualifier': 'off', // Conflicts with 'no-namespace' rule.
    // sometimes it's better to specify type argument explicitly.
    '@typescript-eslint/no-unnecessary-type-arguments': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'off', // Implemented in typescript.
    '@typescript-eslint/no-var-requires': 'off', // Conflicts with '@typescript-eslint/no-require-imports' rule.
    '@typescript-eslint/parameter-properties': 'off', // Sometimes it's better to use parameter properties, sometimes it's not
    '@typescript-eslint/prefer-includes': 'off', // Useless.
    '@typescript-eslint/prefer-namespace-keyword': 'off', // Conflicts with 'no-namespace' rule.
    // it's not very convenient for DI and sometimes mutations are good.
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off', // Useless.
    '@typescript-eslint/promise-function-async': 'off', // Useless if we don't await some result.
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        // Sometimes it can be useful,
        // but `private readonly map: Map<number, string = new Map<number, string>();` makes a code less readable
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: true,
        propertyDeclaration: true,
        // Sometimes it can be useful,
        // but `const map: Map<number, string = new Map<number, string>();` makes a code less readable
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: true,
      },
    ],

    // Extension Rules - https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin.

    '@typescript-eslint/init-declarations': 'off', // Typescript checks unassigned variables using.
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }], // Default options have been changed
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        // eslint-disable-next-line no-magic-numbers
        ignore: [-1, 0, 1],
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreEnums: true,
        ignoreTypeIndexes: true,
      },
    ],
    '@typescript-eslint/no-restricted-imports': 'off', // Nothing to restrict
    '@typescript-eslint/no-unused-expressions': 'off', // Typescript checks this.
    '@typescript-eslint/no-unused-vars': 'off', // Implemented in typescript.
    // it's better to have ability to organize code inside file by priority and not by define order.
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/return-await': 'off', // Useless.

    '@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
    '@typescript-eslint/unbound-method': 'off', // We can use bind here.
  },
};
