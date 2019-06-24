import tip from './index.vue'
let $vm
export default {
  install (Vue, options) {
    if (!$vm) {
      const TipPlugin = Vue.extend(tip)
      $vm = new TipPlugin({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    Vue.prototype.flyerUpdateTip = {
      init (config) {
        if (config.hasOwnProperty('show')) {
          $vm.show = config.show
        } else {
          $vm.show = true
        }
        let title = config.title
        $vm.title.text = title.text
        $vm.title.fontSize = title.fontSize || '20px'
        $vm.title.color = title.color || '#000'
        let content = config.content
        $vm.content.text = content.text
        $vm.content.fontSize = content.fontSize || '16px'
        $vm.content.color = content.color || '#000'
      },
      show () {
        $vm.show = true
      },
      hide () {
        $vm.show = false
      }
    }
  }
}
