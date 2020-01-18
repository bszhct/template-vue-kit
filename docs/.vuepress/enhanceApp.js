import VueHighlightJS from 'vue-highlight.js'
import Antd from 'ant-design-vue'


import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import vue from 'vue-highlight.js/lib/languages/vue'

import 'ant-design-vue/dist/antd.css'
import 'highlight.js/styles/vs2015.css'

import Uikit from '../../src'


export default ({
  // VuePress 正在使用的 Vue 构造函数
  Vue,
  // 附加到根实例的一些选项
  options,
  // 当前应用的路由实例
  router,
  // 站点元数据
  siteData
}) => {
  Vue.use(Antd)
  Vue.use(VueHighlightJS, {
    languages: {
      css,
      javascript,
      vue
    }
  })
  Vue.use(Uikit)
}
