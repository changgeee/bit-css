<<<<<<< HEAD
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

=======
>>>>>>> 4e718c1930c03b29baa8d584b6c773489247552f
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
<<<<<<< HEAD
  },
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      })
    ]
=======
>>>>>>> 4e718c1930c03b29baa8d584b6c773489247552f
  }
};