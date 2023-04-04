import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'          
import 'primeicons/primeicons.css'                        


//component
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';

Vue.use(PrimeVue);
Vue.config.productionTip = false

Vue.component('Sidebar', Sidebar);
Vue.component('Button', Button);
Vue.component('Dialog', Dialog);
Vue.component('Dropdown', Dropdown);

Vue.use(new VueSocketIO({
  debug: true,
  connection: process.env.VUE_APP_SERVER_URL,
  transports: ['websocket']

}));
new Vue({
  render: h => h(App),
}).$mount('#app')
