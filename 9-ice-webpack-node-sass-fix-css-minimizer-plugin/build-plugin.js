const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('scss')
      .use('sass-loader')
      .loader(require.resolve('sass-loader'))
      .options({
        implementation: require('node-sass'),
      });
    config.optimization.minimizer('CssMinimizerPlugin').use(new CssMinimizerPlugin());
  });
};
