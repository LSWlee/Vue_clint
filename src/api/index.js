/**
 * Created by lsw on 2018/12/22 0022.
 */
import ajax from './api';
//const BASE = 'http://localhost:5000'
const BASE = '/api';
export function reqAddress(longitude,latitude) {
  return ajax(BASE + `/position/${latitude},${longitude}`)
}
export function reqCategorys() {
  return ajax(BASE + `/index_category`)
}
export function reqShops(longitude, latitude) {
  return ajax(BASE + `/shops`,{longitude,latitude})
}
