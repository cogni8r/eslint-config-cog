# ESLint config

**Gears** projects configs for [ESLint](https://eslint.org).

## Usage

Install dependencies. For **node** project:

```shell
npm install --save-dev eslint  \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-jsdoc \
eslint-plugin-node \
eslint-config-cog
```

For **react**:

```shell
npm install --save-dev eslint \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-jsdoc \
eslint-plugin-jsx-a11y \
eslint-plugin-react \
eslint-config-cog
```

For **vue**:

```shell
npm install --save-dev eslint \
@typescript-eslint/eslint-plugin \
@typescript-eslint/parser \
eslint-config-prettier \
eslint-plugin-import \
eslint-plugin-jsdoc \
eslint-plugin-node \
eslint-plugin-vue \
eslint-config-cog
```

\*\*Add file `.eslintrc.cjs` with content (and extend it if you need):

```javascript
module.exports = {
  extends: ["eslint-config-cog/eslint-node-with-types"], // or other config
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
    sourceType: "module",
  },
  rules: {
    // change rules here if you have some local requirements
    "no-restricted-imports": [
      "error",
      {
        patterns: ["**/src/**"],
      },
    ],
  },
  overrides: [
    // or override them here
    {
      files: ["*.test.ts"],
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: ["**/src/**", "!../src/**", "!**/../src/**"],
          },
        ],
      },
    },
  ],
};
```
