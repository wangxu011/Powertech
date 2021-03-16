import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import './assets/styles/my-element.scss'

import { 
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Carousel,
  CarouselItem,
  Image,
  Pagination
} from 'element-ui'

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Pagination)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
