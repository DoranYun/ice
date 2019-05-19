const { last } = require('lodash');
const path = require('path');

function getFilename(filePath) {
  return last((filePath || '').split('/'));
}

module.exports = (api) => {
  const entry = api.processEntry('demo/index.js');
  api.chainWebpack((config) => {
    // remove default entry then add new enrty to webpack config
    config.entryPoints.clear();
    config.merge({ entry });


    if (api.service.command === 'build') {
      // set block publicPath
      config.output.publicPath('./');
      ['scss', 'scss-module', 'css', 'css-module', 'less', 'less-module'].forEach((rule) => {
        if (config.module.rules.get(rule)) {
          config.module.rule(rule).use('MiniCssExtractPlugin.loader').tap(() => ({ publicPath: '../' }));
        }
      });

      const filename = getFilename(config.output.get('filename'));
      config.output.filename(path.join('', filename));

      const options = config.plugin('MiniCssExtractPlugin').get('args')[0];
      config.plugin('MiniCssExtractPlugin').tap((args) => [Object.assign(...args, {
        filename: path.join('', getFilename(options.filename)),
      })]);
    }

    config.plugin('HtmlWebpackPlugin').tap((args) => [Object.assign(...args, {
      template: 'demo/index.html',
    })]);
  });
};
