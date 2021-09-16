/**
 * https://github.com/gajus/eslint-plugin-jsdoc
 */

module.exports = {
  rules: {
    'jsdoc/check-access': 'error',
    'jsdoc/check-alignment': 'off', // Prettier.
    'jsdoc/check-examples': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-param-names': 'error',
    'jsdoc/check-property-names': 'error',
    'jsdoc/check-syntax': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/check-types': 'off', // Typescript provides types.
    // It doesn't actual now (there should be some setting about licence and author.
    'jsdoc/check-values': 'off',
    'jsdoc/empty-tags': 'error',
    'jsdoc/': 'off',
    'jsdoc/implements-on-classes': 'error',
    'jsdoc/match-description': 'error',
    'jsdoc/newline-after-description': 'error',
    'jsdoc/no-types': 'error',
    'jsdoc/no-undefined-types': 'off', // Typescript provides types
    'jsdoc/require-description': 'off',
    'jsdoc/require-description-complete-sentence': 'error',
    'jsdoc/require-example': 'off', // It's not always reasonable to provide examples.
    'jsdoc/require-file-overview': 'off', // Not actual.
    'jsdoc/require-hyphen-before-param-description': 'error',
    'jsdoc/require-jsdoc': 'off',
    // 'jsdoc/require-jsdoc': [
    //   'error',
    //   {
    //     require: {
    //       ArrowFunctionExpression: true,
    //       ClassDeclaration: true,
    //       ClassExpression: true,
    //       FunctionDeclaration: true,
    //       FunctionExpression: true,
    //       MethodDefinition: true,
    //     },
    //   },
    // ],
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-type': 'off', // Typescript has types.

    // Properties should be described on object type.
    'jsdoc/require-property': 'off',
    'jsdoc/require-property-description': 'error',
    'jsdoc/require-property-name': 'error',
    'jsdoc/require-property-type': 'off', // Typescript provides types.

    'jsdoc/require-returns': 'off', // Often this information duplicates description.
    'jsdoc/require-returns-check': 'error',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/require-returns-type': 'off', // Typescript has types.
    'jsdoc/require-throws': 'off',
    'jsdoc/valid-types': 'error',
  },
};
