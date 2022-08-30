<template>
  <div>
    <el-button type="primary" class="mr-2 btn-fullscreen" @click="handleFullScreen">
      全屏
      <el-icon><full-screen /></el-icon>
    </el-button>
    <el-date-picker type="date" style="width:150px" placeholder="选择日期"> </el-date-picker>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      fullscreen: false
    }
  },
  created() {},
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
    }
  }
}
</script>
<style scoped lang="scss"></style>
