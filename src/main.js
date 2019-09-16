import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Bars from 'vuebars';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import './assets/style/index.css';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(Bars);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
