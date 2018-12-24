<template>
  <div>
    <router-view/>
    <FooterGuide v-show="$route.meta.FooterShow"/>
  </div>
</template>
<script type="text/javascript">
  import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'
 export default {
    mounted() {
      this.$store.dispatch('getAddress')
    },
   components:{
     FooterGuide

   }
 }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
