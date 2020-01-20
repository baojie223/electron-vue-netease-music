<template>
  <div class="layout">
    <Header />
    <div class="body">
      <Sider />
      <div class="main">
        <Scroll :key="now">
          <router-view />
        </Scroll>
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
  },
  data() {
    return {
      now: 0
    }
  },
  watch: {
    '$route.path'() {
      this.now = Date.now()
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.body {
  display: flex;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  padding: 16px;
}
</style>
