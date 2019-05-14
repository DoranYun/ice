const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const getCertificate = require('../../config/getCertificate');
const processEntry = require('../../config/processEntry');
const log = require('../../utils/log');

module.exports = async (api) => {
  const { commandArgs, userConfig } = api.service;
  // plugin cliOptions will run after plugin userConfig.
  // if commandArgs.https is true, it will overwrite devServer config
  let httpsConfig;
  if (commandArgs.https) {
    try {
      const cert = await getCertificate();
      httpsConfig = {
        key: cert.key,
        cert: cert.cert,
      };
    } catch (e) {
      log.info('HTTPS 证书生成失败，已转换为HTTP');
    }
  }
  api.chainWebpack((config) => {
    if (commandArgs.disabledReload) {
      config.plugins.delete('HotModuleReplacementPlugin');

      // remove css hot loader of scss/module-scss/css/module-css/less/module-less
      ['scss', 'scss-module', 'css', 'css-module', 'less', 'less-module'].forEach((rule) => {
        if (config.module.rules.get(rule)) {
          config.module.rule(rule).uses.delete('css-hot-loader');
        }
      });
      config.devServer.hot(false);
      // remove entry hotDevClient
      if (!userConfig.entry && !userConfig.injectBabel) {
        // if injectBabel is not set, polyfill default is true
        const entry = processEntry('src/index.js', { polyfill: true, hotDev: false });
        config.entryPoints.clear();
        config.merge({ entry });
      }
    }

    if (commandArgs.analyzer) {
      config.plugin('webpack-bundle-analyzer')
        .use(BundleAnalyzerPlugin, [{ analyzerPort: commandArgs.analyzerPort || '9000' }]);
    }

    if (httpsConfig) {
      config.devServer.https(httpsConfig);
    } else {
      config.devServer.https(false);
    }
  });
};
