// conventional commiting 约定式提交规范
module.exports = {
  // 定义提交类型
  types: [
    { value: 'feat', name: 'feat:     新增功能' },
    { value: 'fix', name: 'fix:      修复 bug' },
    { value: 'docs', name: 'docs:     仅文档或注释变更' },
    { value: 'style', name: 'style:    代码格式变更 (不影响功能，例如空格、分号、引号、缩进等)' },
    { value: 'refactor', name: 'refactor: 代码重构 (不包括bug修复、新增功能)' },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     添加、修改测试用例' },
    { value: 'build', name: 'build:    构建流程、外部依赖变更 (如升级npm包、修改webpack配置等)' },
    { value: 'ci', name: 'ci:       修改CI配置、脚本' },
    { value: 'chore', name: 'chore:    对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)' },
    { value: 'revert', name: 'revert:   回滚 commit' },
  ],

  scopes: [
    { value:'components', name: '组件相关' },
    { value:'hooks', name: 'hook相关' },
    { value:'utils', name: 'utils相关' },
    { value:'styles', name: '样式相关' },
    { value:'custom', name: '以上都不是?我要自定义' }
  ],
  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // 交互提示信息
  messages: {
    type: "\n请确保本地提交遵循约定式规范:\n\n选择你要提交的类型",
    scope: '\n选择一个scope (可选):',
    customScope: '请输入自定义的scope:',
    subject: '填写简短的变更描述:\n',
    body: '填写详细的变更描述 (可选):\n',
    breaking: '列举非兼容的重大变更 (可选):\n',
    footer: '列举所有变更的ISSUES (可选). E.g.: #31, #34:\n',
    confirmCommit: '确认提交吗?',
  },

  // 允许自定义scope
  allowCustomScopes: false,
  // 设置type选择了feat 或 fix才询问breaking message
  allowBreakingChanges: ['feat', 'fix'],
  // 跳过要询问的步骤
  skipQuestions: ['footer'],

  // 限制简述的长度
  subjectLimit: 120,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
