/**
 * Created by lsw on 2018/12/25 0025.
 */
import Vue from 'vue'
import {reqGoods,reqInfo,reqRatings} from '../../api'
import {RECIVE_GOODS,RECIVE_INFO,RECIVE_RATINGS,INCREMENT_FOOD,DECREMENT_FOOD} from '../mution_types'
const state = {
  info:{},
  goods:[],
  ratings:[],
  cartFoods:[]

}
const actions = {
  async getGoods({commit},callback){
    const result = await reqGoods()
    if(result.code===0){
      const goods = result.data
      commit(RECIVE_GOODS,{goods})
      typeof callback==='function' && callback()
    }
  },
  async getRatings({commit}){
    const result =await reqRatings()
    if(result.code===0){
      const ratings = result.data
      commit(RECIVE_RATINGS,{ratings})
    }
  },
  async getInfo({commit}){
    const result =await reqInfo()
    if(result.code===0){
      const info = result.data
      commit(RECIVE_INFO,{info})
    }
  },
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD,{food})
    }else{
      commit(DECREMENT_FOOD,{food})
    }

  }
}
const mutations = {
 [RECIVE_GOODS](state,{goods}){
   state.goods = goods
 },
  [RECIVE_RATINGS](state,{ratings}){
  state.ratings = ratings
  },
  [RECIVE_INFO](state,{info}){
    state.info = info
  },
  [INCREMENT_FOOD](state,{food}){
    if(!food.count){//如果没有此属性，新添加一个
      Vue.set(food,'count',1)
      state.cartFoods.push(food)//因为操作的都是同一个食物对象
    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD](state,{food}){
    if(food.count>0){
      food.count--
      if(food.count===0){
        //从购物车中删除
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  }

}
const getters = {
  // cartFood(state){
  //   const foods = []
  //   this.state.goods.forEach(good=>{
  //     good.foods.forEach(food=>{
  //       if(food.count>0){
  //         foods.push(food)
  //       }
  //     })
  //   })
  //   return foods
  // }
  totalCount(state){
   return state.cartFoods.reduce((prev,food)=>{
      return prev + food.count
    },0)
  },
  totalPrice(state){
   return state.cartFoods.reduce((prev,food)=>{
      return prev + food.price*food.count
    },0)
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
