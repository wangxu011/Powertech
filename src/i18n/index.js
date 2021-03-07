import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import locale from 'element-ui/lib/locale'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en.json'
import zhLocale from './zh.json'

Vue.use(VueI18n)

const messages = {
  "EN": {
    ...enLocale,
    ...elementEnLocale,
  },
  "CN": {
    ...zhLocale,
    ...elementZhLocale,
  }
}

const language = Cookies.get("lang")
if(!language){
  Cookies.set('lang', 'CN')
}

const i18n = new VueI18n({
  locale: Cookies.get('lang'),
  messages
})

locale.i18n((key, value) => i18n.t(key, value))
export default i18n