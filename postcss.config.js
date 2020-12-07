/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss')({ config: './config/tailwind.config.js' }),
    require('postcss-preset-env')({ stage: 1 }),
  ],
};
