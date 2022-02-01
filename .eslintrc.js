const fs = require('fs');
const path = require('path');

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.{ts?(x),js}'],
      rules: { 'prettier/prettier': ['warn', prettierOptions] },
    },
  ],
};
