const deps = require("./package.json").dependencies;

module.exports = {
  name: 'craco1',
  filename: 'remoteEntry.js',
  remotes: {
    module1: "module1@http://localhost:6007/remoteEntry.js",
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
