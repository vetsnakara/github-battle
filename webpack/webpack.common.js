const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Webapck bundled JavaScript project!',
      template: './src/index.html'
    })
  ]
}
