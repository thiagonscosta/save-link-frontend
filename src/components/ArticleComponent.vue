<template>
  <div>
    <!-- <div>{{ article.url }}</div> -->
    <!-- <link-prevue url="https://flaviocopes.com/axios/"></link-prevue>
    <link-prevue url="https://nick-basile.com/blog/post/build-a-customizable-vuejs-modal-with-tailwind-css"></link-prevue>
    <link-prevue url="https://laravel-news.com/building-a-modal-with-vue-and-tailwind"></link-prevue> -->
    <vue-link-preview url="https://vuejs.org/" @click="handleClick"></vue-link-preview>
  </div>
</template>

<script>
// import LinkPreview from '@ashwamegh/vue-link-preview'

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
