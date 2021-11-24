import Vue from 'vue'
import App from './App.vue'
import * as VeeValidate from 'vee-validate'
// import { useForm, useField } from 'vee-validate';

// import {BootstrapVue, FormPlugin} from "bootstrap-vue";

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.config.productionTip = false;
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);
// Vue.use(BootstrapVue)
// Vue.use(FormPlugin)
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors"
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
