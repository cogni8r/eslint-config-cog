// All eslint-rules ara considered as on, there are only 'off' and non-default eslint-rules

module.exports = {
  rules: {
    // Common
    'react/destructuring-assignment': 'off', // There is no universal way of assignment.
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    // READ AGAIN

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-set-state': 'off', // Not actual now but in future this rule can be enabled.
    'react/prefer-read-only-props': 'off', // Flow rules are not actual.
    'react/react-in-jsx-scope': 'off', // Typescript does this check.
    'react/require-optimization': 'off', // It's not always actual.
    'react/require-render-return': 'off', // Typescript does this check.
    'react/sort-comp': 'off', // Useless.
    'react/sort-prop-types': 'off', // Useless.
    'react/static-property-placement': 'off', // Useless.

    // JSX-specific
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true }],
    'react/jsx-max-depth': 'off', // It's better to split component by good abstractions, not by some strict rules.
    'react/jsx-no-duplicate-props': 'off', // Typescript does this check.
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'off', // React does this check.
    'react/jsx-sort-default-props': 'off', // Useless.
    'react/jsx-sort-props': 'off', // Useless.
    'react/jsx-uses-react': 'off', // Typescript does this check.
    'react/jsx-uses-vars': 'off', // Typescript does this check.
  },
};
