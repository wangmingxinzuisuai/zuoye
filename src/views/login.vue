
<template>
  <div class="login">
    <div class="box">
      <div>
        <p>OA系统登陆</p>
      </div>
      <div>
        <input
          type="text"
          v-model="name"
          placeholder="请输入用户名"
          @blur="focus1"
        /><br />
        <span v-show="flag" :class="{ red: !text, green: text }">{{
          text ? "用户名正确" : "请输入用户名"
        }}</span
        ><br />
        <input
          type="password"
          v-model="password"
          placeholder="请输入密码"
          @blur="focus2"
        /><br />
        <span v-show="flag1" :class="{ red: !pass, green: pass }">{{
          pass ? "密码正确" : "请输入密码"
        }}</span>
        <span class="wpass" @click="forgot">忘记密码？</span><br />
        <input type="text" placeholder="验证码" /> <button>验证码图片</button>
      </div>
      <div>
        <button @click="Signin">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getBanner} from '../api/api'
export default {
  name: "",
  components: {},
  data() {
    return {
      name: "", //用户名
      password: "", // 密码
      flag: false,
      flag1: false,
      text: false,
      pass: false,
    };
  },
  created() {
    getBanner().then(res => {
      console.log(res);
    })
    // axios.get('https://api.it120.cc//small4/banner/list').then(res => {
    //   console.log(res);
    // })
  },
  mounted() {},
  methods: {
    // 正则验证
    focus1() {
      // 用户名校验，4到16位（字母，数字，下划线，减号）
      let a = /^[a-zA-Z0-9_-]{4,16}$/;
      console.log(a.test(this.name));
      this.text = a.test(this.name);
      this.flag = true;
    },
    focus2() {
      // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      // 例子
      // Kd@curry666
      let a = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
      console.log(a.test(this.name));
      this.pass = a.test(this.password);
      this.flag1 = true;
    },
    // 登录
    Signin() {
      if (this.text && this.pass) {
        this.$router.push("/");
      } else {
        this.$message.error("请输入正确的用户名或密码");
      }
    },
    // 忘记密码
    forgot(){
      this.$router.push('/Forgot-password')
    }
  },
};
</script>
<style scoped lang="scss">
.green {
  color: green;
}
.red {
  color: red;
}
.login {
  width: 1267px;
  height: 731px;
  background-image: url("../assets/v2_rgrea6.png");
  background-size: 100% 100%;
  .box {
    width: 495px;
    height: 463px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 20px;
    div:nth-child(1) {
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin: 20px 0 30px 0;
    }
    div:nth-child(2) {
      width: 76%;
      margin: 0 auto;
      font-size: 16px;
      input {
        width: 95%;
        height: 30px;
        padding: 3px 10px;
        border-radius: 10px;
        outline: none;
        margin-top: 20px;
        border: 1px solid #777;
      }
      input:nth-child(1) {
        background: url("../assets/我的-我的.png") no-repeat 15px;
        background-size: 20px 20px;
        padding-left: 40px;
      }
      input:nth-child(5) {
        background: url("../assets/密码（关）.png") no-repeat 15px;
        background-size: 20px 20px;
        padding-left: 40px;
      }
      input:nth-child(10) {
        width: 50%;
        padding-left: 30px;
        margin-bottom: 30px;
      }
      button {
        height: 30px;
        margin-left: 20px;
        float: right;
        width: 30%;
        background: 0;
        border: 1px #777 solid;
        height: 35px;
        border-radius: 20px;
        padding: 0 10px;
        outline: none;
        margin-top: 20px;
      }
      .wpass {
        float: right;
        color: #f6d17d;
      }
      span {
        font-size: 14px;
        display: inline-block;
        margin-left: 20px;
      }
    }
    div:nth-child(3) {
      width: 100%;
      text-align: center;
      button {
        width: 60%;
        background-color: #d9bffb;
        color: #fff;
        height: 35px;
        border: 0;
        outline: none;
        border-radius: 10px;
      }
    }
  }
}
</style>

