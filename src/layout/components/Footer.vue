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
import { songUrl } from '@/api/explore'
import { mapGetters } from 'vuex'
import { Howl } from 'howler'
export default {
  name: '',
  data() {
    return {
      status: 'timeout',
      player: null,
      playId: 0
    }
  },
  computed: {
    ...mapGetters('music', ['currentMusic'])
  },
  watch: {
    currentMusic: {
      handler(val) {
        this.clear()
        this.init(val)
      }
    }
  },
  created() {},
  methods: {
    init(id) {
      songUrl(id).then(res => {
        this.player = new Howl({
          src: [res.data[0].url],
          // autoplay: true
        })
        this.status = 'timeout'
        this.toggle()
      })
    },
    clear() {
      if (this.player) {
        this.player.unload()
        this.playId = ''
        this.status = 'timeout'
      }
    },
    toggle() {
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
