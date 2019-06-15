const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const env = { prod: false };

module.exports = merge(common(env), {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    https: true,
  },
});
