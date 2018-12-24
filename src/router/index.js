/**
 * Created by lsw on 2018/12/21 0021.
 */

import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './routes';

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes,
})
