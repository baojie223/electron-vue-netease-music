<template>
  <div class="avatar">
    <div v-if="!isLogin" class="off" @click="open">
      <a-avatar icon="user" size="small" />
      <span style="margin-left: 8px">未登录</span>
    </div>
    <a-dropdown v-else class="on" :trigger="['click']">
      <a class="ant-dropdown-link" href="#">
        <a-avatar v-if="Object.keys(profile).length" :src="profile.profile.avatarUrl" size="small" />
        <a-avatar v-else icon="user" />
        <span style="margin-left: 8px">{{ profile.profile.nickname }}</span>
        <a-icon type="down" />
      </a>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <a @click="logout">退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-modal :closable="false" :visible="visible" :footer="null" @cancel="close">
      <Login @close="close" />
    </a-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './Login'
export default {
  name: '',
  components: {
    Login
  },
  data() {
    return {
      visible: false
    }
  },
  computed: {
    ...mapGetters('user', ['isLogin', 'profile'])
  },
  methods: {
    open() {
      this.visible = true
    },
    close() {
      this.visible = false
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$message.success('退出登录成功')
    }
  }
}
</script>

<style lang="less" scoped>
.avatar {
  // height: 100%;
  margin: 0 8px;
  cursor: pointer;
  .off {
    display: flex;
    align-items: center;
  }
}
</style>
