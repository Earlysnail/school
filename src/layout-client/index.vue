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
  data() {
    return {
    }
  },
  components: {
    AppMain,
    Navbar,
  },
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
</style>
