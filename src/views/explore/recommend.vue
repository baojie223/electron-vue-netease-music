<template>
  <div>
    <List :data="songs" />
  </div>
</template>

<script>
import List from './components/List'
import { recommendSongs } from '@/api/explore'
export default {
  name: '',
  components: {
    List
  },
  data() {
    return {
      songs: []
    }
  },
  created() {
    recommendSongs().then(res => {
      console.log(res)
      this.songs = res.recommend || []
    })
  }
}
</script>

<style lang="less" scoped>

</style>
