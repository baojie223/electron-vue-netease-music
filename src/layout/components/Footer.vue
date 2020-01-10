<template>
  <div class="footer">
    <span class="circle">
      <Icon t="iconprevious" style="font-size: 40px" />
    </span>
    <span class="circle" @click="toggle">
      <Icon v-if="status === 'play'" t="iconplay" style="font-size: 48px" />
      <Icon v-if="status === 'timeout'" t="icontimeout" style="font-size: 48px" />
    </span>
    <span class="circle">
      <Icon t="iconnextsong" style="font-size: 40px" />
    </span>
  </div>
</template>

<script>
import { Howl } from 'howler'
export default {
  name: '',
  data() {
    return {
      status: 'play',
      player: null,
      playId: void 0
    }
  },
  created() {
    this.player = new Howl({
      src: ['http://m8.music.126.net/20200110180542/508bb667853ad077eb9435a63208ccd3/ymusic/5109/020e/0e59/fca15439665dfdc220ee93ffcb380747.flac']
    })
  },
  methods: {
    toggle() {
      if (this.status === 'play') {
        this.player.pause(this.playId)
        this.status = 'timeout'
      }
      if (this.status === 'timeout') {
        this.playId = this.player.play()
        this.status = 'play'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  align-items: center;
  height: 48px;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}
.circle {
  cursor: pointer;
}
</style>
