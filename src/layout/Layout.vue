<template>
  <div class="layout">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: '',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>

</style>
