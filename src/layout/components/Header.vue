<template>
  <div class="header">
    <a-icon type="close" @click="close" />
    <a-icon type="border" @click="max" />
    <a-icon type="minus" @click="min" />
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
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
}
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: red;
}
</style>
