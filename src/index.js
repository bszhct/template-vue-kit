import VueSpin from './spin'
import VueButton from './button'

const components = [
  VueSpin,
  VueButton
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  VueSpin,
  VueButton
}
