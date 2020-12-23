<template>
  <div></div>
</template>

<script>
// import axios from 'axios';
import article from '../services/article'

export default {
  name: 'Board',
  data() {
    return {
      articles: [],
    }
  },
  mounted() {
    // axios.get('http://localhost:9090/api/articles').then((data) => console.log(data));
    // article.getAll().then((data) => console.log(data))
    this.getAllArticles()
  },
  methods: {
    async getAllArticles() {
      const all = await article.getAll();
      console.log(all)
    }
  }
}
</script>