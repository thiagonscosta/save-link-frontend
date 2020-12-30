<template>
  <div class="">
    <ListFolders :folders="folders" />
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
    ...mapState('folderStore', { folders: 'all' })
  },
  created() {
    this.$store.dispatch('folderStore/getFolders')
  },
  components: {
    Board,
    ListFolders,
  }
}
</script>
