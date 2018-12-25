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
// 7、发送短信验证码
export function reqSendcode(phone) {
  return ajax(BASE + `/sendcode`,{phone})
}
//用户名登陆
export const reqUserPwdLogin = ({name,pwd,captcha}) => ajax(BASE + '/login_pwd',{name,pwd,captcha},'POST')
//手机号验证码登陆

export const reqverification = (phone,code) => ajax(BASE + '/login_sms',{phone,code},'POST')

//自动登陆
export const reqUserinfo = () => ajax(BASE + '/userinfo')

export const reqLogout = () => ajax(BASE + '/logout')
//定义mock数据接口的请求函数
export const reqGoods = () => ajax('/goods')

export const reqRatings =() => ajax('/ratings')

export const reqInfo =() => ajax('/info')


