<template>
  <a-table
    size="default"
    :rowKey="(record, i) => i"
    :columns="columns"
    :dataSource="data"
    :showHeader="false"
  >
    <template v-slot:index="index">{{ index }}</template>
    <template v-slot:action="record">
      <Icon :t="record.starred ? 'iconlike' : 'icondislike'" @click.native="toggle(record)" style="cursor: pointer" />
    </template>
    <template v-slot:artists="record">{{record[0].name}}</template>
    <template v-slot:album="record">{{record.name}}</template>
    <template v-slot:duration="record">{{record | timePipe}}</template>
  </a-table>
</template>
<script>
import { like } from '@/api/explore'
import dayjs from 'dayjs'
const columns = [
  {
    dataIndex: 'index',
    scopedSlots: { customRender: 'index' }
  },
  {
    key: 'action',
    scopedSlots: { customRender: 'action' }
  },
  {
    dataIndex: 'name'
  },
  {
    dataIndex: 'artists',
    scopedSlots: { customRender: 'artists' }
  },
  {
    dataIndex: 'album',
    scopedSlots: { customRender: 'album' }
  },
  {
    dataIndex: 'duration',
    scopedSlots: { customRender: 'duration' }
  }
]

export default {
  props: {
    data: Array
  },
  data() {
    return {
      columns
    }
  },
  methods: {
    async toggle({ id, starred, alg }) {
      try {
        await like({ id, like: !starred, alg })
        this.$emit('update')
      } catch (e) {
        console.log(e.name)
      }
    }
  },
  filters: {
    timePipe(val) {
      return dayjs(val).format('mm:ss')
    }
  }
}
</script>
