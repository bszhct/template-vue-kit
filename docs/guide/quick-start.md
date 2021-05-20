## 安装

```bash
yarn i @bszhct/template-vue-kit
```


## 全局引用

```js
import VueUikit from '@bszhct/template-vue-kit'

Vue.use(VueUikit)

```


## 使用

```vue
<vue-spin :spinning="true">
  <div>这里面的内容在设置 spinning 为 false 时展示</div>
</vue-spin>
```


## 通过 CDN 的方式引用

你也可以通过 CDN 的方式来使用，以 vue/cli@4.x 创建的模板为例，先在 public/index.html 里面的 head 中引用脚本：

```html

<script src="http://cdn.bszhct.com/lib/vue-uikit-umd.min.js"></script>

```

然后在 [vue.config.js](https://cli.vuejs.org/zh/config/) 中配置一下 [externals](https://webpack.docschina.org/configuration/externals/)

```js

module.exports = {
  configureWebpack: {
    externals: {
      'VueUikit': 'vue-uikit'
    }
  }
}

```
