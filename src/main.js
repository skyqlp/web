import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/border.css';
import './assets/reset.css';
import './assets/iconfont.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
