<template>
  <section class="msite">
    <!--首页头部-->
    <NavHeader :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </NavHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper"  v-if="categorys.length>0">
          <div class="swiper-slide" v-for="(c,index) in categoryArray" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'http://fuss10.elemecdn.com' + category.image_url" >
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <img src="./images/msite_back.svg" alt="loding" v-else>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>

<script>
  import ShopList from '../../components/ShopList/ShopList.vue'
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys');
    },
    computed:{
      ...mapState({
        address: state => state.msite.address,
        categorys:state => state.msite.categorys
      }),
      categoryArray(){
        const {categorys} = this
        //得到大数组
        const bigArray = []
        //得到小数组
        let smallArray = []
        categorys.forEach(c => {
          //将小数组添加到大数组只添加一次
          if(smallArray.length===0){
            bigArray.push(smallArray)
          }
          smallArray.push(c)
          //如果小数组里面个数等于8创建一个新的数组
          if(smallArray.length===8){
            smallArray = []
          }
        })
        return bigArray
      }
    },
    watch:{
      categorys(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },

    components:{
      ShopList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
