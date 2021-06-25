const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  webpack: config => {
    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin({
        configFile: './tsconfig.paths.json',
      }),
    ];
    config.plugins = [...config.plugins];
    return config;
  },
};
