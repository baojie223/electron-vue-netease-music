<template>
  <div class="control">
    <span class="dot red" @click="close"></span>
    <span class="dot yellow" @click="max"></span>
    <span class="dot green" @click="min"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ipcRenderer } from 'electron'
export default Vue.extend({
  name: '',
  methods: {
    close() {
      ipcRenderer.send('close')
    },
    max() {
      ipcRenderer.send('max')
    },
    min() {
      ipcRenderer.send('min')
    }
  }
})
</script>

<style lang="less" scoped>
.control {
  display: flex;
  align-items: center;
}
.dot {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 50%;
  cursor: pointer;
}
.red {
  background-color: #f56c6c;
}
.yellow {
  background-color: #e6a23c;
}
.green {
  background-color: #67c23a;
}
</style>
