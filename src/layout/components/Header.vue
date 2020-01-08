<template>
  <div class="header">
    <Control class="no-drag" />
    <Move class="no-drag" />
    <Avatar class="no-drag" />
  </div>
</template>

<script>
import Control from './Control'
import Move from './Move'
import Avatar from './Avatar'
export default {
  name: '',
  data() {
    return {}
  },
  components: {
    Control,
    Move,
    Avatar
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  // background-color: @primary-color;
  -webkit-app-region: drag;
  .no-drag {
    -webkit-app-region: no-drag;
  }
}
</style>
