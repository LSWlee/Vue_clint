/**
 * Created by lsw on 2018/12/22 0022.
 */
import {
  reqAddress,
  reqCategorys,
  reqShops,
} from '../api'
import {
  RECIVE_ADDRESS,
  RECIVE_CATEGORYS,
  RECIVE_SHOPS
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
}
