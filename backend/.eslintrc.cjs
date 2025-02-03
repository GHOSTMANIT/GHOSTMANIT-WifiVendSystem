const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig([
  {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
<<<<<<< HEAD
]);
=======
]);
>>>>>>> cb5d6b8d (Initial commit)
