<template>
  <div class="">
    <ListFolders 
      :folders="folders"
      @open="openFolder" 
    />
    <Board />
    <div v-for="article in articles" :key="article._id">{{ article }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Board from '@/components/Board.vue'
import ListFolders from '@/components/ListFolders.vue'

export default {
  name: 'Home',
  computed: {
    ...mapState('folderStore', { folders: 'all' }),
    ...mapState('articleStore', { articles: 'all' }),
  },
  created() {
    this.$store.dispatch('folderStore/getFolders')
  },
  components: {
    Board,
    ListFolders,
  },
  methods: {
    openFolder(id) {
      console.log(id)
      this.$store.dispatch('articleStore/getByFolder', id)
    }
  }
}
</script>
