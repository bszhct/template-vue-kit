const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '../../', dir)
}

module.exports = {
  title: 'VUE-UIKIT',
  description: '基于 Vue 的通用组件库模板',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],
  dest: './dist',
  port: 8686,
  theme: 'antdocs',
  themeConfig: {
    logo: '/favicon.svg',
    // 顶部导航栏配置
    nav: [
      { text: '主页', link: '/' },
      { text: '使用说明', link: '/guide/introduction' },
      { text: '文档', link: '/components/spin' }
    ],
    // 侧边栏设置
    sidebar: {
      '/components/': [
        // 新增组件文档时需要在这新增一个路由对象
        {
          title: 'Button 按钮',
          path: 'button'
        },
        {
          title: 'Spin 加载',
          path: 'spin'
        }
      ],
      '/guide/': [
        {
          title: '指南',
          children: [
            {
              title: '使用说明',
              path: 'introduction'
            },
            {
              title: '快速上手',
              path: 'quick-start'
            }
          ]
        }
      ]
    },
    // 将同时提取 markdown 中的 h2 显示在侧边栏上
    sidebarDepth: 1,
    // 上次更新
    lastUpdated: '上次更新'
  },
  markdown: {

  },
  plugins: [
    // 回到顶部插件
    '@vuepress/back-to-top',
    // 图片放大组件
    // https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    ['@vuepress/medium-zoom', { selector: 'img' }]
  ],
  chainWebpack: (config, isServer) => {
    config.resolve.alias
      .set('@', resolve('src'))
  }
}
