<template>
  <div class="avatar">
    <div v-if="true" class="off">
      <a-avatar icon="user" size="small" />
      <span style="margin-left: 8px">未登录</span>
    </div>
    <a-dropdown v-else class="on" :trigger="['click']">
      <a class="ant-dropdown-link" href="#">
        Click me
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </a-menu-item>
        <a-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="3">3rd menu item</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style lang="less" scoped>
</style>
