import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
import VueResource from 'vue-resource'

Vue.use(Vuetify);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
