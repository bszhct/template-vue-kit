import VueLoading from './loading'
import VueButton from './button'

const components = [
  VueLoading,
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
  install,
  VueLoading,
  VueButton
}
