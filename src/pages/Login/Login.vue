<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:isShow}" @click="isShow=true">短信登录</a>
          <a href="javascript:;" :class="{on:!isShow}" @click="isShow=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:isShow}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!isRightPhone || computedTime>0" class="get_verification" :class="{right_phone_number:isRightPhone}" @click.prevent="sendCode">
                {{computedTime>0 ? `已发送(${computedTime}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="phoneCode">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!isShow}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="用户名" v-model="user">
              </section>
              <section class="login_verification">
                <input :type="pwd ? 'text' : 'password' " maxlength="8" placeholder="密码" v-model="userPwd">
                <div class="switch_button" :class="pwd ? 'on' : 'off'" @click="pwd=!pwd">
                  <div class="switch_circle" :class="{right:pwd}"></div>
                  <span class="switch_text">{{pwd ? 'abc' : ''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="verification">
                <img ref="captcha" class="get_verification" src="http://localhost:5000/captcha" alt="captcha" @click="sendCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="userLogin">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back"  @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>
<script type="text/javascript">
  import { Toast ,MessageBox } from 'mint-ui';
  import {reqSendcode,reqUserPwdLogin,reqverification,} from '../../api'
  export default {
    data(){
      return {
        isShow:true,//确定默认是短信登陆还是密码登陆
        phone:'',
        computedTime:0,
        pwd:false,
        user:'',
        userPwd:'',
        verification:'',//图片验证码
        phoneCode:''//短信验证码
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      //发送验证码
     async sendCode(){
        this.computedTime = 30
        let intervalId = setInterval(()=>{
          this.computedTime--
          if(this.computedTime<=0){
            this.computedTime = 0
            clearInterval(intervalId)
          }
        },1000)
       //发送请求
       const result = await reqSendcode(this.phone)
       if(result.code===0){
         //提示框
         Toast({
           message: '验证码发送成功',
           position: 'center',
           duration: 2000
         });
       }else{
         this.computedTime = 0
         MessageBox.alert('点击确认', '验证码发送失败');
       }
      },
      sendCaptcha(){
        this.$refs.captcha.src = 'http://localhost:5000/captcha?time=' + Date.now()
      },
      async userLogin(){
        const {user,userPwd,verification,isRightPhone,phoneCode,phone,isShow} = this
        //如果是短信方式登陆
        let result;
        if(isShow){
        //表单验证
          if(!isRightPhone){
            //手机号码不正确
            return MessageBox.alert('手机号码不正确');
          }else if(!/^\d{6}$/.test(phoneCode)){
            return  MessageBox.alert('验证码有误');
          }
        //发送请求
         result = await reqverification(phone,phoneCode)
        }else{
          //用户名密码登陆
          if(!user.trim()){
            return  MessageBox.alert('请输入用户名');
          }else if(!userPwd){
            return MessageBox.alert('请输入密码');
          }else if (verification.length!==4){
            return MessageBox.alert('验证码有误');
          }
           result = await reqUserPwdLogin({name:user,pwd:userPwd,captcha:verification})
        }
        //根据结果做不同响应,因为页面显示需要用到result中data的数据，所以需要将它保存到state中
       if(result.code===0){
          const user = result.data;
         this.$store.dispatch('saveUser',user)
         this.$router.replace('/profile')
       }else{
         return MessageBox.alert(result.msg);
       }

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone_number
                  color #000
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
