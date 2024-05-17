const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
module.exports = {
  publicPath: isProd() ? process.env.VUE_APP_PUBLICK_PATH : '/', // 设置output.publicPath，区分生产环境和开发环境
  outputDir: process.env.VUE_APP_OUTPUR_DIR,
  productionSourceMap: false,
  devServer: {
    // 配置 webpack-dev-server 行为。
    open: false,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hot: true,
    hotOnly: true,
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_URL]: {
        target: `http://kumanxuan1.f3322.net:8001/`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_URL]: '',
        },
      },
    }, // string | Object
    before: (app) => {},
  },
  parallel: false,
  css: {
    // 开启 CSS source maps
    sourceMap: false,
    extract: true,
  },
  configureWebpack: {
    plugins: [
      new SkeletonWebpackPlugin({
        webpackConfig: {
          entry: {
            app: path.join(__dirname, './src/skeleton/entry-skeleton.js')
          }
        },
        minimize: true,
        quiet: true,
        router: {
          mode: 'history',
          routes: [{
              path: '/',
              skeletonId: 'skeleton1'
            },
            {
              path: '/User',
              skeletonId: 'skeleton2'
            }
          ]
        }
      })
    ]
  },
  chainWebpack: (config) => {
    // 新增别名
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('vue$', 'vue/dist/vue.esm.js');

    // svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    if (isProd()) {
      // 1、压缩html中的css
      config.plugin('html').tap((args) => {
        args[0].minify.minifyCSS = true;
        return args;
      });
      // 2、去除console.log 、debugger
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true;
        args[0].terserOptions.compress.drop_debugger = true;
        return args;
      });

      // 3、gzip需要nginx进行配合
      config
        .plugin('compression')
        .use(CompressionWebpackPlugin)
        .tap(() => [{
          algorithm: 'gzip',
          minRatio: 0.8,
          test: /\.js$|\.html$|\.css$/, // 匹配文件名
          threshold: 4096, // 超过4k进行压缩
          deleteOriginalAssets: false, // 是否删除源文件
        }, ]);
      // 4、去掉空格，减少打包体积
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap((options) => {
          // modify the options...
          options.compilerOptions.preserveWhitespace = true;
          return options;
        });
    }
  },
};

function resolve(dir) {
  return path.join(__dirname, dir);
}

function isProd() {
  return process.env.NODE_ENV === 'production';
}