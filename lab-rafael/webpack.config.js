const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle-[hash].js'
  },
  plugins: [new HtmlPlugin({template: './index.html'})],
  module: {
    rules: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        test: /\.js$/, loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/, loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
