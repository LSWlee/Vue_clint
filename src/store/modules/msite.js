/**
 * Created by lsw on 2018/12/25 0025.
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '../../api'
import {
  RECIVE_ADDRESS,
  RECIVE_CATEGORYS,
  RECIVE_SHOPS,
} from '../mution_types'
const state = {
  longitude:116.36867,
  latitude:40.10038,
  address:{},
  categorys:[],
  shops:[],

}
const actions = {
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
}
const mutations = {
  [RECIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys
  },
  [RECIVE_SHOPS] (state,{shops}){
    state.shops = shops
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
