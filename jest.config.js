module.exports = {
  moduleDirectories: ['node_modules', 'utils', __dirname],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
};
