<template>
  <div style="height: 500px">
    <List :data="songs" @update="fetchDate" />
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
    this.fetchDate()
  },
  methods: {
    fetchDate() {
      recommendSongs().then(res => {
        console.log(res)
        this.songs = res.recommend || []
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
