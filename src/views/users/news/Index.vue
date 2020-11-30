<template>
  <div id="news-list">
    <ul>
      <li v-for="item in news" :key="item.id">
        <router-link :to="{ path: `/news/${item.id}` }">
          <NewsCard :news="item"></NewsCard>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewsCard from "@/components/cards/NewsCard";

export default {
  components: {
    NewsCard,
  },
  methods: {
    ...mapActions({
      fetchManyNews: "news/fetchManyNews",
    }),
  },
  computed: {
    ...mapState({
      news: (state) => state.news.manyNews,
    }),
  },
  mounted() {
    this.fetchManyNews();
  },
};
</script>

<style>
#news-list li {
  margin-bottom: 40px;
}
</style>
