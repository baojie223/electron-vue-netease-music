<template>
  <div class="sider">
    <a-menu
      style="width: 200px; height: 100%"
      :defaultOpenKeys="['推荐', '我的音乐']"
      :defaultSelectedKeys="['发现音乐']"
      :inlineIndent="16"
      mode="inline"
    >
      <a-sub-menu key="推荐">
        <span slot="title">
          <span>推荐</span>
        </span>
        <a-menu-item key="发现音乐">
          <div style="display: flex; align-items: center;">
            <Icon t="iconchild" style="font-size: 24px" />
            <span>发现音乐</span>
          </div>
        </a-menu-item>
        <a-menu-item key="私人FM">
          <div style="display: flex; align-items: center;">
            <Icon t="iconvoiceprint" style="font-size: 24px" />
            <span>私人FM</span>
          </div>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="我的音乐">
        <span slot="title">
          <span>我的音乐</span>
        </span>
        <a-menu-item key="本地音乐">
          <div style="display: flex; align-items: center;">
            <Icon t="iconmusic1" style="font-size: 24px" />
            <span>本地音乐</span>
          </div>
        </a-menu-item>
        <a-menu-item key="下载管理">下载管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.sider {
  /deep/ .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    left: 0;
    right: auto;
  }
}
</style>
