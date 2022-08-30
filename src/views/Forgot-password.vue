
<template>
<div>
    <div class="box">
        <p>修改密码</p>
        <div>
            <p>用户名：&nbsp&nbsp&nbsp <input type="text"></p>
            <p>新密码：&nbsp&nbsp&nbsp <input type="text"></p>
            <p>再次输入：&nbsp<input type="text"></p>
        </div>
        <div>
            <button>确认</button>
            <button @click="$router.go(-1)">取消</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.box{
    width: 500px;
    height: 300px;
    border: 1px solid #777;
    position: fixed;
    top: 50%;
    right: 50px;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 30px;
    div:nth-child(2){
        margin: 30px 0;
        width: 100%;
        padding-left: 10%;
        p{
            margin: 20px 0;
        }
    }
    div:nth-child(3){
        float: right;
        button:nth-child(1){
            background-color: #b886f8;
            color: #fff;
            outline: none;
            border:  solid #b886f8;
            width: 70px;
        }
        button:nth-child(2){
            background-color: none;
            outline: none;
            margin-left: 20px;
            width: 70px;
        }
    }
}
</style>
