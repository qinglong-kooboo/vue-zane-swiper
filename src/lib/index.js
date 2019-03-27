import Swiper from './swiper.vue'
import './assets/iconfont.css'

const swiper = {
  install: function(Vue) {
    Vue.component(Swiper.name, Swiper)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(swiper) 
}
// 导出模块
export default swiper
