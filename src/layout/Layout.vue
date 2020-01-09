<template>
  <div class="layout">
    <Header />
    <div class="body">
      <Sider />
      <div class="main">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Sider from './components/Sider'
import Footer from './components/Footer'
export default {
  name: '',
  components: {
    Header,
    Sider,
    Footer
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100%;
}
.body {
  display: flex;
  height: calc(100% - 96px);
}
.main {
  height: 100%;
  padding: 16px;
  overflow: auto;
}
</style>
