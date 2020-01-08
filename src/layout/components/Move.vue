<template>
  <a-button-group>
    <a-button type="primary" @click="back">
      <a-icon type="left" />
    </a-button>
    <a-button type="primary" @click="forward">
      <a-icon type="right" />
    </a-button>
  </a-button-group>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      // flag: true
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  },
  mounted() {
    // window.addEventListener('beforeunload', () => {
    //   this.flag = false
    // })
  }
}
</script>

<style lang="less" scoped>
</style>
