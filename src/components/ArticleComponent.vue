<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'ArticleComponent',
  props: ['article'],
  mounted() {
    console.log('article', this.article)
  }
}
</script>
