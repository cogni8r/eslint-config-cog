module.exports = {
  extends: ['eslint-config-cog/node'], // or other config
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  rules: {},
  overrides: [
    // or override them here
    {
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/no-restricted-imports': 'off',
      },
    },
  ],
};
