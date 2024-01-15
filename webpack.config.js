const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './server.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: '/views/index.html',
      template: __dirname + '/views/index.html' })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  target: 'node'
}
