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
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const dev = Boolean(process.env.WEBPACK_SERVE);
const mode = dev ? 'development' : 'production';
let externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
}
let proxy = {}
let plugins = [];
if (dev) {
  proxy = {
    '/api': {
      target: 'http://localhost:8120',
      pathRewrite: { '^/api': '/api' },
    },
  }
}
if (!dev) {
  plugins.push(new CopyPlugin({
    patterns: [
      { from: "public", to: "" },
    ],
  }))
}
const config = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  mode,
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      // maxSize: 20000,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimize: false,
    // minimizer: [
    //   new TerserPlugin(
    //     {
    //       terserOptions: {
    //         format: {
    //           comments: false,
    //         },
    //         compress: {
    //           // drop_console: true,
    //           drop_debugger: !dev,
    //         }
    //       },
    //       extractComments: false,
    //     }
    //   )
    // ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    // publicPath: `auto`,
    publicPath: dev ? '/' : '/kevisual-ruler/',
  },
  devtool: dev ? "source-map" : false,
  devServer: {
    static: [{
      directory: path.join(__dirname, 'public'),
    },
    {
      directory: path.join(__dirname, 'apps'),
      watch: true,
    },
    ],
    compress: true,
    hot: true,
    allowedHosts: 'all',
    historyApiFallback: {
      disableDotRule: true,
    },
    port: 8085,
    proxy,
    client: {
      overlay: true,
      logging: 'info',
    }
  },
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
  externals: externals,
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: /src/,
        use: [
          {
            loader: 'esbuild-loader',
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules\/(?!.*abearxiong)/,
        include: /src/,
        use: [
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
        test: /\.(css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader', options: { sourceMap: dev }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  return [
                    'postcss-preset-env',
                  ];
                }
              }
            }
          },
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              attributes: {
                nonce: "kevisual",
              }
            },
          },
          {
            loader: 'css-loader', options: {
              sourceMap: dev,
              modules: true, // 此处设置为false可禁用局部CSS 
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => {
                  return [
                    'postcss-preset-env',
                  ];
                }
              }
            }
          },
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      cache: true,
      version: pkgs.version,
    }),
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
    // new MiniCssExtractPlugin({
    //   filename: '[name].bundle.css',
    //   chunkFilename: '[id].css'
    // }),
    ...plugins,
    new BundleAnalyzerPlugin({ analyzerMode: !dev ? 'static' : 'disable' }),
  ],
};

module.exports = config