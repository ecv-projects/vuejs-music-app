<template>
  <div>
    <ul>
      <li
      v-for="item in news"
      :key="item.id"
      >
     <NewsCard :news="item"></NewsCard>
    </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import NewsCard from "@/components/home/NewsCard";

export default {
  components: {
    NewsCard,
  },
  methods: {
    ...mapActions({
      fetchManyNews: 'news/fetchManyNews'
    })
  },
  computed: {
    ...mapState({
      news: state => state.news.manyNews
    })
  },
  mounted () {
    this.fetchManyNews()
  }
}
</script>
