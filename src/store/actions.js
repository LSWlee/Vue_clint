/**
 * Created by lsw on 2018/12/22 0022.
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserinfo,
  reqLogout
} from '../api'
import {
  RECIVE_ADDRESS,
  RECIVE_CATEGORYS,
  RECIVE_SHOPS,
  RECIVE_USER,
  USER_LOGOUT
} from './mution_types'
export default {
 async getAddress({commit,state}){
   const {longitude,latitude} = state
 let result = await reqAddress(longitude,latitude)
   if(result.code===0){
     const address = result.data
     commit(RECIVE_ADDRESS,{address})
   }
  },
  async getCategorys({commit}){
    let result = await reqCategorys()
    if(result.code===0){
      const categorys = result.data
      commit(RECIVE_CATEGORYS,{categorys})
    }
  },
  async getShops({commit,state}){
    const {longitude,latitude} = state
    let result = await reqShops(longitude,latitude)
    if(result.code===0){
      const shops = result.data
      commit(RECIVE_SHOPS,{shops})
    }
  },
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
