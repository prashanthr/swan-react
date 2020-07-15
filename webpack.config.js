const path = require('path')
const TARGET_DIR = 'lib'
const TARGET_FILE_NAME = 'swan-react.js'
const ENTRYPOINT = './src/index.js'
const LIBRARY_TARGET = 'umd' // 'commonjs2'

module.exports = {
  entry: ENTRYPOINT,
  output: {
    path: path.resolve(__dirname, TARGET_DIR),
    filename: TARGET_FILE_NAME,
    libraryTarget: LIBRARY_TARGET
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
