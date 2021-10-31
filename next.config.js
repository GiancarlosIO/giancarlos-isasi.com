const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { i18n } = require('./next-i18next.config');

const { CDN_DOMAIN, NODE_ENV, VERCEL_GIT_COMMIT_REF } = process.env;
const isProduction = NODE_ENV === 'production';
const isQAorMaster =
  VERCEL_GIT_COMMIT_REF === 'master' || VERCEL_GIT_COMMIT_REF === 'qa';

const config = {
  i18n,
  images:
    isProduction && isQAorMaster
      ? {
          loader: 'imgix',
          path: CDN_DOMAIN,
          domains: [CDN_DOMAIN],
        }
      : {},
  swcMinify: true,
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

module.exports = config;
