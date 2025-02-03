import { defineConfig } from 'eslint-define-config';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
<<<<<<< HEAD
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
=======
      'react/react-in-jsx-scope': 'off', 
      'no-console': 'warn', 
      quotes: ['error', 'single'], 
      semi: ['error', 'always'], 
    },
    settings: {
      react: {
        version: 'detect', 
>>>>>>> cb5d6b8d (Initial commit)
      },
    },
  },
]);
