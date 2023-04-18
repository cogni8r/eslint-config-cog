// 5.57.0 - https://typescript-eslint.io/rules/

const typescriptRules = {
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    {
      allowExpressions: true,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
  '@typescript-eslint/explicit-module-boundary-types': 'off', // explicit-function-return-type already checks it
  '@typescript-eslint/member-ordering': 'off',
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
      format: ['PascalCase', 'camelCase', 'UPPER_CASE'],
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
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/no-unnecessary-qualifier': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/sort-type-constituents': 'off',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],
};

const extensionRules = {
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-restricted-imports': 'off',
};

export default { ...typescriptRules, ...extensionRules };
