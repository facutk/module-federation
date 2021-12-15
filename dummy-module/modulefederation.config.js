const deps = require("./package.json").dependencies;

module.exports = {
  name: 'module1',
  filename: 'remoteEntry.js',
  exposes: {
    "./Button": "./src/Button",
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
