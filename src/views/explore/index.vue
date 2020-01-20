<template>
  <div class="explore">
    <div class="title">
      <span>推荐歌单</span>
      <a href="#">更多></a>
    </div>
    <a-divider style="margin: 8px 0" />
    <router-link to="/explore/recommend">每日歌曲推荐</router-link>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

<style lang="less" scoped>
.explore {
  display: flex;
  flex-direction: column;
  width: 100%;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span {
      font-size: 20px;
    }
  }
}
</style>
