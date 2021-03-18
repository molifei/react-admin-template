module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'globals': {
    '$': true,
    'process': true,
    '__dirname': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module',
    'ecmaVersion': 7
  },
  'plugins': [
    'react'
  ],
  'rules': {
    // allow paren-less arrow functions
    'no-tabs': 0,
    'indent': [0, 2],
    'quotes': [2, 'single'], // js必须使用单引号
    'linebreak-style': [0, 'error', 'windows'], // 允许windows开发环境
    'semi': [0, 'always'], // 语句强制分号结尾
    'no-console': [0], // 不允许console语句
    'no-unused-vars': [1], // 声明了变量但是没有使用检测
    'one-var': 0, // 是否可以一起声明变量
    'padded-blocks': 0,
    'space-unary-ops': [1, {'words': true, 'nonwords': false}], // 一元运算符的前/后要不要加空格
    'brace-style': [2, '1tbs', {'allowSingleLine': false}], // 大括号风格
    'comma-spacing': [2, {'before': false, 'after': true}],   // 逗号后有空格，前没有空格
    'comma-style': [2, 'last'],  // 逗号跟在结尾
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}], // 对象字面量中冒号的前后空格
    'lines-around-comment': [ // 行前/行后备注
      2, {
        'beforeBlockComment': false, // 段注释的前后
        'beforeLineComment': false, // 行注释的前面
        'afterBlockComment': false, // 块注释的后面
        'afterLineComment': false, // 行注释的后面
        'allowBlockStart': true,
        'allowObjectStart': true,
        'allowArrayStart': true
      }],
    'max-depth': [2, 4], // 代码最多允许4层嵌套
    'max-len': [1, 160, 2],
    'max-nested-callbacks': [2, 3], // 回调嵌套深度
    'max-params': [2, 5], // 函数最多只能有5个参数
    'max-statements': [1, 80],  // 单个函数最多80条语句
    'no-array-constructor': [2], // 禁止使用数组构造器
    'no-lonely-if': 0, // // 禁止else语句内只有if语句
    'no-multiple-empty-lines': [2, {'max': 3, 'maxEOF': 1}], // 空行最多不能超过2行
    'no-nested-ternary': 2,  // 不使用嵌套的三元表达式
    'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 0, // 一行结束后面不要有空格
    'no-unneeded-ternary': 2, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;简单的判断用三元表达式代替
    'object-curly-spacing': [0, 'never', { // 大括号内是否允许不必要的空格 always始终允许；never始终不允许
      'objectsInObjects': false,
      'arraysInObjects': false
    }],
    'arrow-spacing': 2, // =>的前/后括号
    'block-scoped-var': 2, // 块语句中使用var
    'no-dupe-class-members': 2,
    'no-undef': 0, // 未声明的变量
    'no-var': 0, // 禁用var，用let和const代替
    'object-shorthand': [0, 'always'], // 强制对象字面量缩写语法
    'no-unused-expressions': 0, // 禁止未使用过的表达式
    'array-bracket-spacing': [2, 'never'], // 是否允许非空数组里面有多余的空格
    'operator-linebreak': [2, 'after'], // 换行时运算符在行尾还是行首
    'semi-spacing': [2, {'before': false, 'after': true}], // 分号前后空格
    'keyword-spacing': ['error'],
    'space-before-blocks': 2, // 不以新行开始的块{前面要不要有空格
    'block-spacing': [2, 'always'],
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
    'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
    'spaced-comment': [1, 'always',
      {
        'exceptions': ['-', '*', '+', '!']
      }], // 注释风格要不要有空格什么的
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-irregular-whitespace': 0,
    'import/no-duplicates': 0,
    'handle-callback-err': 0,
    'jsx-quotes': [2, 'prefer-double'], // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/display-name': 0, // 防止在React组件定义中丢失displayName
    'react/forbid-prop-types': [2, {'forbid': ['any']}], // 禁止某些propTypes
    'react/jsx-boolean-value': 2, // 在JSX中强制布尔属性符号
    'react/jsx-closing-bracket-location': 0, // 在JSX中验证右括号位置
    'react/jsx-curly-spacing': [2, {'when': 'never', 'children': true}], // 在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-indent-props': [0, 2], // 验证JSX中的props缩进
    'react/jsx-key': 2, // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-max-props-per-line': [0, {'maximum': 1}], // 限制JSX中单行上的props的最大数量
    'react/jsx-no-bind': 0, // JSX中不允许使用箭头函数和bind
    'react/jsx-no-duplicate-props': 2, // 防止在JSX中重复的props
    'react/jsx-no-literals': 0, // 防止使用未包装的JSX字符串
    'react/jsx-no-undef': 1, // 在JSX中禁止未声明的变量
    'react/jsx-pascal-case': 0, // 为用户定义的JSX组件强制使用PascalCase
    'react/jsx-sort-props': 0, // 强化props按字母排序
    'react/jsx-uses-react': 1, // 防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 2, // 防止在JSX中使用的变量被错误地标记为未使用
    'react/no-danger': 0, // 防止使用危险的JSX属性
    'react/no-did-mount-set-state': 0, // 防止在componentDidMount中使用setState
    'react/no-did-update-set-state': 1, // 防止在componentDidUpdate中使用setState
    'react/no-direct-mutation-state': 2, // 防止this.state的直接变异
    'react/no-multi-comp': 2, // 防止每个文件有多个组件定义
    'react/no-set-state': 0, // 防止使用setState
    'react/no-unknown-property': 2, // 防止使用未知的DOM属性
    'react/prefer-es6-class': 2, // 为React组件强制执行ES5或ES6类
    'react/prop-types': 0, // 防止在React组件定义中丢失props验证
    'react/react-in-jsx-scope': 2, // 使用JSX时防止丢失React
    'react/self-closing-comp': 0, // 防止没有children的组件的额外结束标签
    'react/sort-comp': 2, // 强制组件方法顺序
    'no-extra-boolean-cast': 0, // 禁止不必要的bool转换
    'react/no-array-index-key': 0, // 防止在数组中遍历中使用数组key做索引
    'react/no-deprecated': 0, // 不使用弃用的方法
    'react/jsx-equals-spacing': 2, // 在JSX属性中强制或禁止等号周围的空格
    'no-unreachable': 1, // 不能有无法执行的代码
    'comma-dangle': 2, // 对象字面量项尾不能有逗号
    'no-mixed-spaces-and-tabs': 0, // 禁止混用tab和空格
    'prefer-arrow-callback': 0 // 比较喜欢箭头回调
  },
  'settings': {
    'import/ignore': [
      'node_modules'
    ]
  }
};
