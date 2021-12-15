const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  devServer: {
    port: 6007,
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
