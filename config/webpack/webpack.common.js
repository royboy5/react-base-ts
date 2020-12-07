const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: path.resolve(__dirname, '..', '..', 'src/index.tsx'),
  },
  output: {
    filename: './js/[name].bundle.js',
    path: path.resolve(__dirname, '..', '..', 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      // babel-loader
      {
        test: /\.(js|ts)x?$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // css
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // fonts
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'fonts/[hash].[ext]',
            limit: 5000,
            mimetype: 'application/font-woff',
          },
        },
      },
      {
        test: /\.(ttf|eot|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[hash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../..', 'public/index.html'),
    }),
    new BundleTracker({
      filename: './webpack-stats.json',
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? './css/[name].css' : './css/[name].[fullhash].css',
      chunkFilename: devMode
        ? './css/[chunkhash].css'
        : './css/[chunkhash].[fullhash].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
