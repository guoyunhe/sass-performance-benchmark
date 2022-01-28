const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const safeParser = require('postcss-safe-parser');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('scss')
      .use('sass-loader')
      .loader(require.resolve('sass-loader'))
      .options({
        implementation: require('sass'),
      });
    config.optimization.minimizer('CssMinimizerPlugin').use(new CssMinimizerPlugin());
  });
};
