var path = require('path');

module.exports = Object.assign(require("./webpack.config"), {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8081',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'frontend', 'entry.js')
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8081/javascripts'
  },
});
