<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
import ScrollBar from '@better-scroll/scroll-bar'
BScroll.use(ScrollBar)
BScroll.use(MouseWheel)
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.init()
  },
  updated() {
    this.scroll.refresh()
  },
  methods: {
    init() {
      this.scroll = new BScroll('.wrapper', {
        scrollY: true,
        scrollbar: true,
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}
</style>