<template>
  <div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Board',
  components: {
    // ArticleComponent
  },
  created() {
    this.$store.dispatch('articleStore/getAll')
  },
  computed: {
    ...mapState('articleStore', { articles: 'all' })
  },
}
</script>