/**
 * Created by lsw on 2018/12/25 0025.
 */
import {
  reqUserinfo,
  reqLogout
} from '../../api'
import {
  RECIVE_USER,
  USER_LOGOUT
} from '../mution_types'
const state = {
  user:{}
}
const actions = {
  saveUser({commit},user){
    commit(RECIVE_USER,{user})
  },
  //异步获取当前用户信息，实现自动登陆
  async getUser({commit}){
    let result = await reqUserinfo()
    if(result.code===0){
      const user = result.data
      commit(RECIVE_USER,{user})
    }
  },
  async userLogout({commit}){
    const result = await reqLogout()
    if(result.code===0){
      commit(USER_LOGOUT)
    }
  }
}
const mutations = {
  [RECIVE_USER] (state,{user}){
    state.user = user
  },
  [USER_LOGOUT] (state){
    state.user = {}
  },
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
