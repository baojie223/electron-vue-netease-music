<template>
  <icon-font :type="t" />
</template>

<script>
import { Icon } from 'ant-design-vue'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1535173_3eebln0eemx.js'
})
export default {
  props: {
    t: {
      type: String,
      default: ''
    }
  },
  components: {
    IconFont
  }
}
</script>

<style scoped>
.anticon {
  /* margin-right: 6px; */
  font-size: 24px;
  /* color: inherit; */
}
</style>
