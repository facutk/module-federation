const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  devServer: {
    port: 6007,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  output: {
    publicPath: "http://localhost:6007/",
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    }
  ],
};
