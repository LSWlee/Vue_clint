<template>
  <div class="cartcontrol">
    <div class="iconfont icon-remove_circle_outline"></div>
    <div class="cart-count">{{food.count}}</div>
    <div class="iconfont icon-add_circle"></div>
  </div>
</template>
<script type="text/javascript">
  export default {//因为动态跟新界面数据变化所以需要接收一个值，是对应的食物的值
    props:{
      food:Object
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon-remove_circle_outline
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .icon-add_circle
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>

