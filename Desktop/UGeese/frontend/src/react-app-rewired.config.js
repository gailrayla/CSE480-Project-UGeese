// react-app-rewired.config.js
const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['svg-react-loader'],
  });

  return config;
};
