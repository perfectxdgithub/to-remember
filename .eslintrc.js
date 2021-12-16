module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off', // 允许使用console
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }] // 除了循环条件中可以使用一元运算符，其它地方禁止使用
  }
}
