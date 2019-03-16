import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import Axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/dist/css/swiper.css';
import './assets/border.css';
import './assets/reset.css';
import './assets/iconfont.css';
import './registerServiceWorker';

Vue.prototype.$http = Axios;
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
