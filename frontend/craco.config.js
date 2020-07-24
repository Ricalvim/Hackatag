const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            '@primary-color': '#f0ad4e',
            '@success-color': '#24aa98',
            '@error-color': '#cf6565',
            '@highlight-color': '#cf6565',
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};