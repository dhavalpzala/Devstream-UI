module.exports = {
  entry: './src/js/main.jsx',
  output: {
    path: __dirname + '/assets',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: "style!css!autoprefixer!sass"
      }
    ]
  },
  devServer: {
    port: 8080,
    host: 'devstream.imaginea.com',
    historyApiFallback: true,
    proxy: {
      "/github-api": {
        target: "https://github.com",
        changeOrigin: true,
        pathRewrite: {
          "^/github-api": ""
        }
      },
      "/devstream-api": {
        target: "http://192.168.2.67:9001",
        changeOrigin: true,
        pathRewrite: {
          "^/devstream-api": ""
        }
      }
    }
  }
}
