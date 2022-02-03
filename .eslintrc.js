const fs = require('fs');
const path = require('path');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'react-app', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
  },
  overrides: [
    {
      files: ['**/*.{ts?(x),js}'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
    {
      files: ['**/*.config.js', '**/.*rc.js', 'internals/**/*.js'],
      rules: { '@typescript-eslint/no-var-requires': 0 },
    },
    {
      files: ['**/*.test.ts'],
      rules: { '@typescript-eslint/no-explicit-any': 0 },
    },
  ],
};
