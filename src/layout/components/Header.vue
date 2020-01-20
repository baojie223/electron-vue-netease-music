<template>
  <div class="header">
    <Control class="no-drag" />
    <Move class="no-drag" />
    <Avatar class="no-drag" />
    <a-button class="no-drag" @click="refresh">刷新</a-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Control from './Control.vue'
import Move from './Move.vue'
import Avatar from './Avatar.vue'
export default Vue.extend({
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
})
</script>

<style lang="less" scoped>
.header {
  flex: none;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  // background-color: @primary-color;
  -webkit-app-region: drag;
  .no-drag {
    -webkit-app-region: no-drag;
  }
}
</style>
