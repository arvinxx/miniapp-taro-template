# 小程序 Taro 版模板

## 特征

- 👽 Taro 脚手架版本 V3.0,支持所有 React 特性
- 💡 全面支持 Typescript
- 📺 支持 Redux-Devtools
- 💄 默认开启 CSS Modules
- 📏 适配基础像素为1倍,即 1px 会编译成 2rpx,更符合前端习惯（Taro 脚手架默认是 2 倍）

## 开发步骤

### 安装依赖

```
yarn
```

### 启动开发

```
yarn dev:weapp
```

```
yarn devtools
```

### 打包

```
yarn  build:weapp
```

## 项目技术栈

- 基础框架: Taro + React
- CSS 框架: CSS Modules
- 数据管理: Stook

### Taro

关于 Taro 的介绍, 查看: [官网资料](https://docs.taro.zone/docs/README)
基本上所有需要的信息都可以在这上面找到

### CSS Modules

详见 Taro 中关于 CSS Modules 的[说明](https://docs.taro.zone/docs/css-modules)

### Stook

Stook 是一个基于 Hooks 的数据流管理方案 [文档地址](https://stook-cn.now.sh/)

## 目录架构

### 一级目录结构

```
├── src                    # 源码目录
├── config                 # 配置目录(已经配好了 基本上不用动)
├── types                # 类型定义目录
├── dist                   # 编译结果目录
├── libs                   # remote-redux-devtools 文件地
└── package.json
```

### 源码架构

```
src
├── index.html             # 入口 html 文件
├── app.tsx                # React 入口文件
├── app.config.ts          # 小程序相关配置文件
├── app.global.less        # 全局样式
├── global.ts              # 全局注入代码
├── components             # 可被全局复用的组件代码
├── pages                  # 实际的页面
├── models                 # 数据模型
├── services               # 服务层,封装请求数据
├── utils                  # 工具函数层
└── assets                 # 素材资源
```

## License

[MIT](./LICENSE) ® Arvin Xu
