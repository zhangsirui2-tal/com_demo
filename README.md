# demo_library

[![NPM version](https://img.shields.io/npm/v/demo_library.svg?style=flat)](https://npmjs.org/package/demo_library)
[![NPM downloads](http://img.shields.io/npm/dm/demo_library.svg?style=flat)](https://npmjs.org/package/demo_library)

A react library developed with dumi

## Usage

TODO

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor

# 构建单个包
$ pnpm -F @zsrcom/components run build

```

## LICENSE

## 严格执行 Changesets 标准工作流程

1、开发阶段：开发者实现功能或修复问题

2、创建变更集：
pnpm changeset
创建描述变更的 .md 文件（存储在 .changeset 目录）

3、提交代码：提交代码和生成的 changeset 文件

4、审核合并：其他开发者审核并合并变更

5、版本更新：在发布前，执行：
pnpm changeset version
这会：
根据变更集更新受影响包的版本号
更新 package.json 文件
更新依赖关系
在 CHANGELOG.md 中添加变更记录
移除已处理的 changeset 文件

6、push 代码 发布：执行
pnpm build
pnpm changeset publish

//按需加载，推荐配置
["import", {
"libraryName": "name",
"style": true
}]
