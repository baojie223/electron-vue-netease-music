<template>
  <icon-font :type="t" />
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { Icon } from 'ant-design-vue'
const IconFont: any = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1535173_mgsbvzoi7z.js'
})
export default Vue.extend({
  props: {
    t: {
      type: String,
      default: ''
    }
  },
  components: {
    IconFont
  }
})
</script>

<style scoped>
.anticon {
  /* margin-right: 6px; */
  font-size: 24px;
  /* color: inherit; */
}
</style>
