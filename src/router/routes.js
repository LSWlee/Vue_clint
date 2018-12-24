/**
 * Created by lsw on 2018/12/21 0021.
 */

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
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
    path:'/shop',
    component: Shop,
    children:[
      {
        path:'/shop/goods',
        component:ShopGoods
      },
      {
        path:'/shop/ratings',
        component:ShopRatings
      },
      {
        path:'/shop/info',
        component:ShopInfo
      },
      {
        path:'',
        redirect:'/shop/goods'
      }
    ]
  },
  {
    path:'/',
    redirect:'/msite'
  }
]
