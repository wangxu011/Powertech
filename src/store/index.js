import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    locale: Cookies.get('lang')
  },
  mutations: {
    SET_LOCALE (state, obj) {
      state.locale = obj
    }
  }
})

export default store