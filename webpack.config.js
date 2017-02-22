var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Conway\'s Game Of Life',
  filename: 'index.html',
  template: './src/index.html',
  inject: 'body'
})


module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: __dirname + '/src',
        exclude: __dirname + '/node_modules'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}