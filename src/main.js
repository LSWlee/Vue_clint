import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store'
import NavHeader from './components/NavHeader/NavHeader.vue';
import Star from './components/Star/Star.vue'
import { Button } from 'mint-ui';
import CartControl from './components/CartControl/CartControl.vue'
import './mock/Mock';
import Split from './components/Split/Split.vue'
Vue.component(Button.name, Button);
Vue.component('NavHeader',NavHeader);
Vue.component('Star',Star);
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)
new Vue({
  el:'#app',
  render:h1 => h1(App),
  router,
  store
})
