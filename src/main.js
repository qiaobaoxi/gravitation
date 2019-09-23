import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios'
import Axios from 'axios';
import VueI18n from 'vue-i18n'
import { Select ,Option,Input,Button} from 'element-ui';
import messages from "./i18.js"
import VueRouter from 'vue-router'
import routes from "./routes"
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueI18n)
// Vue.use(ElementUI);
Vue.use(VueAxios,Axios);
Vue.use(VueRouter)
Vue.use(VueLazyload)
Vue.use(Vuex)
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.use(Button);


const i18n = new VueI18n({
  locale: 'en', // 设置地区
  messages, // 设置地区信息
})
const store = new Vuex.Store({
  state: {
    i18n:{
      menuCommunity:i18n.t('message.menuCommunity'),
      menuProduct:i18n.t('message.menuProduct'),
      menuWhitePaper: i18n.t('message.menuWhitePaper'),
      selectPlaceholder:i18n.t('message.selectPlaceholder'),
      introduction:i18n.t('message.introduction'),
      networkImg:i18n.t('message.networkImg'),
      notice:i18n.t('message.notice'),
      networkWidth:i18n.t('message.networkWidth'),
      noticeWidth:i18n.t('message.noticeWidth'),
      noticeTitle:i18n.t('message.noticeTitle'),
      noticeConect:i18n.t('message.noticeConect')
    }
  },
  mutations: {
    increment (state,obj) {
      state.i18n=obj
    }
  }
})

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
