<!-- 客户端layout -->
<template>
  <div>
    <navbar />
    <app-main />
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {
  components: {
    AppMain,
    Navbar
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
</style>
