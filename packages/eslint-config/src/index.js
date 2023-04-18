import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsAll from '@typescript-eslint/eslint-plugin/dist/configs/all.js';
import tsEslintRecommended from '@typescript-eslint/eslint-plugin/dist/configs/eslint-recommended.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactHooksRecommended from 'eslint-plugin-react-hooks';
import a11yPlugin from 'eslint-plugin-jsx-a11y';
import nodeRecommended from 'eslint-plugin-n/lib/configs/recommended-module.js';
import nodePlugin from 'eslint-plugin-n';
import funcComponentPlugin from 'eslint-plugin-react-prefer-function-component';
import commonRules from './rules/common.js';
import nodeRules from './rules/node.js';
import reactRules from './rules/react.js';
import a11yRules from './rules/a11y.js';
import typescriptRules from './rules/typescript.js';

/**
 * @param {'react' | 'node' | 'default'} preset
 */
function configFactory(preset) {
  const config = [
    {
      files: ['**/*.{ts,tsx}'],
      plugins: {
        '@typescript-eslint': tsPlugin,
      },
      rules: {
        ...js.configs.all.rules,
        ...commonRules,
        ...tsEslintRecommended.rules,
        ...tsAll.rules,
        ...typescriptRules,
      },
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: './tsconfig.json',
          sourceType: 'module',
          ecmaVersion: 2020,
        },
        // globals: globals.node,
      },
    },
  ];

  if (preset === 'react') {
    config.push(
      {
        files: ['**/*.{ts,tsx}'],
        ...reactRecommended,
      },
      {
        files: ['**/*.{ts,tsx}'],
        ...reactJsxRuntime,
      },
      {
        files: ['**/*.{ts,tsx}'],
        plugins: {
          'react-hooks': reactHooksRecommended,
          'react-prefer-function-component': funcComponentPlugin,
          'jsx-a11y': a11yPlugin,
        },
        languageOptions: {
          globals: {
            ...globals.browser,
          },
        },
        rules: {
          ...reactHooksRecommended.configs.recommended.rules,
          ...a11yPlugin.configs.strict.rules,
          ...reactRules,
          ...a11yRules,
        },
      },
    );
  }

  if (preset === 'node') {
    config.push({
      files: ['**/*.{ts,tsx}'],
      plugins: {
        n: nodePlugin,
      },
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
      rules: {
        ...nodeRecommended.rules,
        ...nodeRules,
      },
    });
  }

  config.push(prettierConfig);

  return config;
}

export default configFactory;
