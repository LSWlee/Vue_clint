/**
 * Created by lsw on 2018/12/22 0022.
 */
import Vue from 'vue';
import Vuex from 'vuex';

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
