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

```
// config prettierrc
{
"semi": false, //最后一行是否以分号结束
"singleQuote": true, // 是否单引号来代替双引号
"trailingComma": "none" //是否最后一行添加逗号
}

// vscode setting ：
input  save
Editor:Format On Save //即保存时格式化代码
Editor:Tab Size    2 让其和 eslint 一样 tab 代表两个空格不会冲突

eslint 会校验 functionName 和后面括号的间隔，但 prettier 遇到我们保存时会自动消除空格此时为了解决冲突需要 eslintrc.js 文件内配置关闭校验的规则'space-before-function-paren':'off'重启服务器即可
```

### 配置 git 提交规范

1. 全局安装 Commitizen

```
npm install -g commitizen$4.2.4

```

2. 安装并配置 cz-customizable 插件

```
npm i cz-customizable@6.3.0 --save-dev

```

3. 添加以下配置到 package.json 中

```
"config":{
  "commitizen":{
    "path":"node_modules/cz-customizable"
  }
}

```

4. 配置 cz-config.js 文件

5. git cz 来进行提交进入校验

```
 git add .
 git cz
```

### 通过 pre-commit 检测提交时代码规范 (针对 vscode 未配置vscode保存格式化时的补漏) 

1. 安装 husky 生成.husky 文件夹

```
 npx husky install

```

2. .husky 文件夹内添加 pre-commit 和 commit-msg 文件以及添加文件内容

```
 npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src"
 npx husky add .husky/commit-msg 'npx --no-install commitlint  --edit "$1"'

```

3. 检查 vscode 的 setting Editor:Format On Save 是否勾选，假设未勾选
~~ 结果eslint 抛错同时不处理直接提交到git 验证该功能的实现
~~ 结果提交时运行.husky内pre-commit文件进行校验会报eslint校验不通过的报错处,但不负责修复格式报错。

### lint-staged自动修复格式错误

1. 安装lint-staged

```
npm install lint-staged@9.5.0 --save-dev

```

2. package.json 配置如下告知git提交时用lint-staged进行自动各式修复
  ```
  "githooks":{
    "pre-commit":"lint-staged"
  }

  ```

3. 配置lint-staged在package.json

```
"lint-staged":{
  "src/**/*.{js,vue}":[
    "eslint --fix",
    "git add"
  ]
}


```

4. 重新配置.husky 下的pre-commit 内容 

```
- npx eslint --ext .js,.vue src
+ npx lint-staged

```
结果 ：1.若符合规则：提交成功
       2.若不合符规则：它自动执行eslint --fix尝试自动修复，若修复失败则提示你的错误并让你修复后才能提交





