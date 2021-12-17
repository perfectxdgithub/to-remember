// const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: './src/main.ts',
  mode: 'production',
  // 编译文件的缓存设置
  cache: {
    // 在硬盘中生成模块和chunk
    type: 'filesystem'
  },
  /**
   * webpack5中不需要下列插件，或因已经集成到webpack中，或是不兼容
   * clean-webpack-plugin（已集成）
   * webpack.HashedModuleIdsPlugin（已集成更好方案）
   * HardSourceWebpackPlugin（已集成）
   * happypack（不兼容）
   */
  module: {
    rules: [
      {
        // 正则匹配后缀.ts .tsx, 使用babel-loader转换，不包括node_modules的文件
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ForkTsCheckerWebpackPlugin()
  ]
}
