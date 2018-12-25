/**
 * Created by lsw on 2018/12/22 0022.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters'
import actions from './actions'
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'
Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  getters,
  modules:{
    msite,
    user,
    shop
  }
})
