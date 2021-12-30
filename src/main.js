import "@babel/polyfill";
import Vue from 'vue'
import App from './App.vue'
import { store } from 'Src/store';

import './styles/_globals.scss';
import './styles/games.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

if (module && module.hot) {
  module.hot.accept(); 
}