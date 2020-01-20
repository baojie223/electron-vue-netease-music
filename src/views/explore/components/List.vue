<template>
  <a-table :columns="columns" :dataSource="data" :showHeader="false">
    <template v-slot:index="record, i">{{ i }}</template>
    <template v-slot:action="record">
      <Icon t="iconcollection" />
    </template>
    <template v-slot:artists="record">{{record[0].name}}</template>
    <template v-slot:album="record">{{record.name}}</template>
    <template v-slot:duration="record">{{record | timePipe}}</template>
  </a-table>
</template>
<script>
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
  filters: {
    timePipe(val) {
      return dayjs(val).format('mm:ss')
    }
  }
}
</script>
