/**
 * Created by lsw on 2018/12/21 0021.
 */

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path: '/msite',
    component: Msite,
    meta:{
      FooterShow:true
    }
  },
  {
    path: '/order',
    component: Order,
    meta:{
      FooterShow:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      FooterShow:true
    }
  },
  {
    path: '/search',
    component: Search,
    meta:{
      FooterShow:true
    }
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
