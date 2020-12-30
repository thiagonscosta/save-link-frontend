<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'ArticleComponent',
  props: ['article'],
  components: {
    
  },
  mounted() {
    console.log('article', this.article)
  }
}
</script>
