const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  const newConfig = smp.wrap(config, { loaderTopFiles: 5 });
  newConfig.plugins = config.plugins.filter(
    (plugin) => !(plugin instanceof MiniCssExtractPlugin)
  );
  newConfig.plugins.push(new MiniCssExtractPlugin({}));
  return newConfig;
};
