import { clickOutside } from '@/directives'

export default {
  install: (Vue) => {
    Vue.directive('click-outside', clickOutside)
  }
}

