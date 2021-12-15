const path = require('path');
const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  devServer: {
    port: 3001,
    watchFiles: [path.resolve(__dirname, '..', 'dummy-module', 'build')]
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
