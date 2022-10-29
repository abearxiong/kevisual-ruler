/**
 * @type {import('webpack').Configuration}
 */
const pkgs = require('./package.json');
const path = require('path');
const join = path.join;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const dev = Boolean(process.env.WEBPACK_SERVE);
const mode = dev ? 'development' : 'production';
const config = {
  target: 'web',
  entry: {
    index: './src/ruler/index.ts',
  },
  mode: 'production',
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    // filename: (pathData) => {
    //   return `${pathData.chunk.name}/index.js`
    // },
    libraryTarget: 'umd',
    library: 'Ruler',
    libraryExport: "default"
  },
  devtool: dev ? "source-map" : false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // js必须存在，对node_modules有影响
    alias: {
      '@': join(__dirname, 'src'),
    },
    fallback: {
      "crypto": false
    }
  },
  stats: 'errors-warnings',
  externals: [
    {
      'react': {
        commonjs: 'react', // CommonJS 模块
        commonjs2: 'react', // CommonJS 模块
        amd: 'react',       // AMD 模块
        root: 'React',     // 全局变量访问
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
      },
      'react-flow-renderer': true
    },
    function ({ context, request }, callback) {
      // if (/^monaco-editor\/esm\/vs/.test(request)) {
      //   // 使用 request 路径，将一个 commonjs 模块外部化
      //   console.log('request', request);
      //   return callback(null, 'commonjs ' + request);
      // }
      // 继续下一步且不外部化引用
      callback();
    }
  ],
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|gif|bmp)/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          // { loader: 'ts-loader' },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015'
            },
          },
        ],
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
    }),
    new ESLintPlugin({
      fix: true,
      extensions: ['ts', 'tsx'],
      lintDirtyModulesOnly: true,
      quiet: true,
    }),

    new webpack.DefinePlugin({
      WEBPACK_SERVE: JSON.stringify(dev),
    }),
    new MiniCssExtractPlugin({
      // filename: (pathData) => {
      //   return `${pathData.chunk.name}/style/index.css`
      // }
    }),
    new CleanWebpackPlugin(),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "src/dragger", to: "module" },
    //   ],
    // }),
  ],
};

module.exports = config