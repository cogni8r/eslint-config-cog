// 7.32.2 - https://github.com/jsx-eslint/eslint-plugin-react

export default {
  'react/button-has-type': 'error',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/hook-use-state': 'error',
  'react/jsx-boolean-value': 'error',
  'react/jsx-curly-brace-presence': 'error',
  'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
  'react/jsx-fragments': 'error',
  'react/jsx-handler-names': [
    'error',
    {
      checkLocalVariables: true,
      checkInlineFunction: false,
    },
  ],
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-leaked-render': 'error',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-pascal-case': 'error',
  'react/no-array-index-key': 'error',
  'react/no-danger': 'error',
  'react/no-namespace': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-unstable-nested-components': [
    'error',
    {
      allowAsProps: true,
    },
  ],

  'react/self-closing-comp': 'error',
  'react/void-dom-elements-no-children': 'error',

  'react-prefer-function-component/react-prefer-function-component': 'error',
};
