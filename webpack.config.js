module.exports = {
  entry: './src/js/app.jsx',
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
      }
    ]
  },
  devServer: {
    port: 8080,
    host: 'localhost'
  }
}