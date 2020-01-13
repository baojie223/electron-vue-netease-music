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

<script lang="ts">
import Vue from 'vue'
import { Howl } from 'howler'
export default Vue.extend({
  name: '',
  data() {
    return {
      status: 'timeout',
      player: new Howl({src: []}),
      playId: 0
    }
  },
  created() {
    this.player = new Howl({
      src: [
        'http://m8.music.126.net/20200114003303/72b000217839b3b9bed9e822b2f4df44/ymusic/d93e/90a4/1a13/2030d049dbfa5bff413b66c76574d4c2.flac'
      ]
    })
  },
  methods: {
    toggle(): void {
      console.log(this.status)
      if (this.status === 'play') {
        this.player.pause(this.playId)
        this.status = 'timeout'
        return
      }
      if (this.status === 'timeout') {
        if (this.playId) {
          this.player.play(this.playId)
        } else {
          this.playId = this.player.play()
        }
        this.status = 'play'
        return
      }
    }
  }
})
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
