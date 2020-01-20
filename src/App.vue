<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { loginStatus} from '@/api/user'
export default Vue.extend({
  name: 'app',
  created() {
    this.fetchStatus()
  },
  methods: {
    fetchStatus() {
      loginStatus().then((res: any) => {
        console.log(res)
        this.$store.commit('user/SET_PROFILE', res)
      })
    }
  }
})
</script>

<style lang="less">
#app {
  height: 100%;
}
</style>

