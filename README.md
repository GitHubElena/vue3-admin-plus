# admin-element-plus

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### prettier plugin in vscode

1.config prettierrc
{
"semi": false, //最后一行是否以分号结束
"singleQuote": true, // 是否单引号来代替双引号
"trailingComma": "none" //是否最后一行添加逗号
}

2.vscode setting ：
input
输入 save
选择 Editor:Format On Save //即保存时格式化代码

同时找到 Editor:Tab Size 选择 2 让其和 eslint 一样 tab 代表两个空格不会冲突

3.eslint 会校验 functionName 和后面括号的间隔，但 prettier 遇到我们保存时会自动消除空格此时为了解决冲突需要 eslintrc.js 文件内配置关闭校验的规则'space-before-function-paren':'off'重启服务器即可
