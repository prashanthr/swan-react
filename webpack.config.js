// https://derekworthen.com/posts/authoring-typescript-libraries/
const path = require('path')
const ENTRYPOINT = './lib/esm/index.js'
const TARGET_DIR = 'lib/umd'
const TARGET_FILE_NAME = 'index.js'
const LIBRARY_TARGET = 'umd' // 'commonjs2'
const LIBRARY_NAME = 'universal-apps-swan-react'

module.exports = {
  entry: path.resolve(__dirname, ENTRYPOINT),
  output: {
    path: path.resolve(__dirname, TARGET_DIR),
    filename: TARGET_FILE_NAME,
    libraryTarget: LIBRARY_TARGET,
    library: LIBRARY_NAME
  },
  module: {
    rules: [
      {
        test: /\.(t|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      }
    ]
  }
}
