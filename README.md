# VUE-UIKIT

通用的 Vue 组件库模板，基于 @vue/cli@4.x 和 vuepress 搭建。


## 快速使用

### 开发

```bash
yarn dev
```

### 打包文档

```bash
yarn build
```

### 打包组件

```bash
yarn build:lib
```

### 发布

**发布前务必要打包，更新 CHANGELOG.md 和修改 package.json 中的版本号**

```bash
npm publish
```


## 新增组件

1、在 `src` 里面新增组件

2、在 `docs/.vuepress/components/demo` 新增使用姿势

3、在 `docs/components` 里面新增使用文档
