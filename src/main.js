// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import { store } from './store/store'
import { initMixins } from './mixins/mixins'
import { initWindowVariables } from './utils/window-variables'

Vue.config.productionTip = false;

// Init global Vue methods
initMixins();
// Init global window variables;
initWindowVariables();

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
