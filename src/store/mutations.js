/**
 * Created by lsw on 2018/12/22 0022.
 */
import {
  RECIVE_ADDRESS,
  RECIVE_CATEGORYS,
  RECIVE_SHOPS,
  RECIVE_USER,
  USER_LOGOUT
} from './mution_types'
export default {
  [RECIVE_ADDRESS] (state,{address}){
    state.address = address
  },
  [RECIVE_CATEGORYS] (state,{categorys}){
    state.categorys = categorys
  },
  [RECIVE_SHOPS] (state,{shops}){
    state.shops = shops
  },
  [RECIVE_USER] (state,{user}){
    state.user = user
  },
  [USER_LOGOUT] (state){
    state.user = {}
  },
}
