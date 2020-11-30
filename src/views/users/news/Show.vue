<template>
  <div id="news">
    <div>
      <router-link :to="{ name: 'news.index' }">News List</router-link>

      <article>
        <div class="news-image">
          <img :src="news.image" :alt="news.title" />
        </div>
        <div>
          <div>
            <p>
              <small>{{ getDate }}</small>
            </p>
            <h2 class="title is-2">
              {{ news.title }}
            </h2>
            <p>{{ news.content }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchNews: "news/fetchNews",
    }),
  },
  computed: {
    ...mapState({
      news: (state) => state.news.news,
    }),
  },
  mounted() {
    this.fetchNews(this.$route.params.id);
  },
};
</script>

<style>
#news .news-image {
  text-align: center;
  margin-bottom: 40px;
}
</style>