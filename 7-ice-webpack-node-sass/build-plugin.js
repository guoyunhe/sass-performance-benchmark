module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.module
      .rule('scss')
      .use('sass-loader')
      .loader(require.resolve('sass-loader'))
      .options({
        implementation: require('node-sass'),
      });
  });
};
