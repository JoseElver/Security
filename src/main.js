import Vue from 'vue'
import App from './App.vue'
import Login from './views/Login.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AccordionPlugin } from '@syncfusion/ej2-vue-navigations';
import VueSweetalert2 from 'vue-sweetalert2';


const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};
global.banderaImagen = 0;
global.banderaDocumento = 0;
global.estaLogeado = false;

Vue.use(VueSweetalert2, options);

Vue.use(AccordionPlugin);

Vue.config.productionTip = false
const VueFire = require('vuefire')
 
Vue.use(VueFire)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
