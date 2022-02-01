module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
};
