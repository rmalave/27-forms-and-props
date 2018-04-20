module.exports = {
  mode: 'development',
  entry: './src/app.js',
  module: {
    rules: [
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      {
        test: /\.js$/, loader: 'babel-loader'
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
