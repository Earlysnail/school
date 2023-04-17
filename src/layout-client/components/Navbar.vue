<!-- NavBar -->
<template>
  <div>
    <div class="navbar">
      <div>资源中心</div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#3D69FE"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">课件</el-menu-item>
        <el-menu-item index="3">教研</el-menu-item>
        <el-menu-item index="4">设置</el-menu-item>
      </el-menu>
      <div />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.activeIndex = key
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #3D69FE;
}
</style>
