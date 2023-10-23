process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = {
  extends: ['stylelint-config-standard'],
  rules: { 'selector-class-pattern': null },

  overrides: [
    {
      files: ['**/*.{tsx,ts,jsx,js}'],
      customSyntax: 'postcss-styled-syntax',
    },
  ],
};
