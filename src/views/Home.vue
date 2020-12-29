<template>
  <div class="">
    <ListFolders />
    <div v-for="f in folders" :key="f._id">{{ f }}</div>
    <Board />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Board from '@/components/Board.vue'
import ListFolders from '@/components/ListFolders.vue'

export default {
  name: 'Home',
  computed: {
    ...mapState('folder', { folders: 'all' })
  },
  created() {
    this.$store.dispatch('folder/getFolders')
  },
  components: {
    Board,
    ListFolders,
  }
}
</script>
