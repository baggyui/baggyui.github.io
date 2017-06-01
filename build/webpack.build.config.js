var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    index: './src/index.js',
    vendor: [
      'baggyui',
      'highlightjs',
      'vue',
      'vue-router'
    ]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].chunk.[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    browsers: ['last 3 versions']
                  })
                ];
              }
            }
          }]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({
                    browsers: ['last 3 versions']
                  })
                ];
              }
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css', '.scss', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devtool: false,
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    new ExtractTextPlugin({
      filename: '[name].[chunkhash:8].css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash:8].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.join(__dirname, '../src/index.html'),
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}