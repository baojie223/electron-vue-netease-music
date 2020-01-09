<template>
  <div class="header">
    <Control class="no-drag" />
    <Move class="no-drag" />
    <Avatar class="no-drag" />
    <a-button class="no-drag" @click="refresh">刷新</a-button>
  </div>
</template>

<script>
import Control from './Control'
import Move from './Move'
import Avatar from './Avatar'
export default {
  name: '',
  components: {
    Control,
    Move,
    Avatar
  },
  methods: {
    refresh() {
      location.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0,0,0,.15);
  // background-color: @primary-color;
  -webkit-app-region: drag;
  .no-drag {
    -webkit-app-region: no-drag;
  }
}
</style>
