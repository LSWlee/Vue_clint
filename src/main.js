import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'
import NavHeader from './components/NavHeader/NavHeader.vue';
import Star from './components/Star/Star.vue'
Vue.component('NavHeader',NavHeader);
Vue.component('Star',Star);
new Vue({
  el:'#app',
  render:h1 => h1(App),
  router,
  store
})
