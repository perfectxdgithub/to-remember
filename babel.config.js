module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入polyfill
        // corejs: {
        //   version: 3,
        //   proposals: true // 使用尚在提议阶段特性的polyfill
        // },
        corejs: 3
      }
    ],
    [
      '@babel/preset-typescript',
      {
        optimizeConstEnums: true, // 内联枚举值
        allExtensions: true // 支持所有扩展名
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3
      }
    ],
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]
}
