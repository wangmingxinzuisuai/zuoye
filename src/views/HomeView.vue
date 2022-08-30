<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '68px' : '160px'">
        <div class="nav-top">
          <img src="../assets/v2_rgsxtp.png" alt="" />
          <span>OA管理系</span>
        </div>
        <div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            collapse-transition
          >
          <el-menu-item-group>
                <el-menu-item index="1-1" @click="$router.push('/home-page')">首页</el-menu-item>
              </el-menu-item-group>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>基础配置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="$router.push('/user-management')">用户管理</el-menu-item>
                <el-menu-item index="1-2" @click="$router.push('/role')">角色管理</el-menu-item>
                <el-menu-item index="1-3" @click="$router.push('/jurisdiction')">权限管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div>
            <i @click="collapse" class="el-icon-s-fold"></i>
          </div>
          <div>

              <img src="../assets/旗子_icon.png" alt="" />
              <img src="../assets/211铃铛.png" alt="" />
              <img src="../assets/信封_填充.png" alt="" />
            <img src="../assets/全屏_o.png"  @click="handleFullScreen"><el-icon><full-screen /></el-icon></img>
            <!-- <i type="primary" class="mr-2 btn-fullscreen el-icon-rank" @click="handleFullScreen">
              <el-icon><full-screen /></el-icon>
            </i> -->
            超级管理员
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: '',
  components: {},
  data() {
    return {
      isCollapse: false, //折叠收起
      fullscreen: false  //全屏
    }
  },
  created() {
	},
  mounted() {},
  methods: {
     // 全屏方法
    handleFullScreen() {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    // 折叠收起
    collapse() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="scss">
.el-header {
  width: 864px;
  background-color: #fff;
  color: #333;
  line-height: 60px;
  border-bottom: 2px solid rgba(119, 119, 119, 0.308);
  display: flex;
  div:nth-child(1) {
    color: rgba(119, 119, 119, 0.432);
    font-size: 28px;
    flex: 1;
  }
  div:nth-child(2) {
      img{
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-right: 20px;
    }

  }
}

.el-aside {
  width: 160px;
  background-color: #7aabf6;
  color: #333;
  min-height: 100vh;
  .nav-top {
    margin: 10px;
    img {
      width: 36px;
      height: 36px;
      vertical-align: middle;
      margin-right: 10px;
    }
    span {
      color: #fff;
    }
  }
  .el-menu {
    .el-submenu {
      color: #fff;
      span,
      i {
        color: #fff;
      }
    }
    background-color: #7aabf6;
    .el-menu-item-group {
      background-color: #7aabf6;
      .el-menu-item {
        color: #fff;
      }
    }
  }
}

.el-main {
  background-color: #fff;
  color: #333;
}
</style>
