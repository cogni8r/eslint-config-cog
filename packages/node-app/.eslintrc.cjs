module.exports = {
  extends: ["eslint-config-cog/eslint-node-with-types"], // or other config
  ignorePatterns: [
    "jest.config.ts",
    "jest.config.js",
    "dist",
    ".eslintrc.cjs",
    "commitlint.config.cjs",
    "node_modules",
    "graph-info",
    "vite.config.ts",
    "tailwind.config.cjs",
    "postcss.config.cjs",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "tsconfig.json",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/restrict-template-expressions": "off",
    // remove after @gears/eslint-config update
    "@typescript-eslint/parameter-properties": "off",
    "@typescript-eslint/sort-type-constituents": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    // not convenient
    "@typescript-eslint/unified-signatures": "off",
    // not convenient
    "no-param-reassign": "off",
    "no-labels": "off",
    // Disabled because due to '_eslint.CLIEngine is not a constructor'
    "jsdoc/check-examples": "off",

    // Allow `@internal` jsdoc tag
    "jsdoc/check-tag-names": [
      "error",
      {
        definedTags: ["internal"],
      },
    ],
    // 'no-labels': 'off', // they are useful
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "parameterProperty",
        format: ["camelCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "forbid",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: false,
        },
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "memberLike",
        modifiers: ["protected"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
    ],
  },
  overrides: [
    // or override them here
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/no-restricted-imports": "off",
      },
    },
  ],
};
