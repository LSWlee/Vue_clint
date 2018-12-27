/**
 * Created by lsw on 2018/12/28 0028.
 */
import Vue from 'vue'
import moment from 'moment'
Vue.filter('data-format',(value,format)=>{
  return moment(value).format(format || 'YYYY-MM-DD HH:mm:ss')
})
