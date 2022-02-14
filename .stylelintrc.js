process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
  ],
  rules: {
    'scss/operator-no-unspaced': null,
  },

  overrides: [
    {
      files: ['**/*.{tsx,ts,jsx,js}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
};
