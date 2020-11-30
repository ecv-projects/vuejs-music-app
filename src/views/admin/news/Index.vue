<template>
  <div class="container-admin">
    <div class="admin-content news">
      <h2 class="title is-2">All news</h2>
      <b-button class="is-info add-news" @click="create">Add News</b-button>
      <b-field label="">
        <b-input
          type="text"
          placeholder="Search a news"
          v-model="search"
        ></b-input>
      </b-field>
      <div>
        <ul>
          <li v-for="item in filteredSearchList" :key="item.id">
              <NewsCard :news="item" />
               <b-button
                type="is-primary is-light"
                @click="showNews(item.id)"
                >Show News</b-button
              >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewsCard from "@/components/cards/NewsCard";

export default {
  components: {
    NewsCard,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions({
      fetchManyNews: "news/fetchManyNews",
    }),
    create() {
      this.$router.push({
        name: "admin.news.create",
      });
    },
    showNews(id) {
      this.$router.push({ name: "admin.news.show", params: { id: id } });
    },
  },
  computed: {
    ...mapState({
      news: (state) => state.news.manyNews,
    }),
    filteredSearchList() {
      return this.news.filter((news) => {
        return news.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.fetchManyNews();
  },
};
</script>

<style>
.container-admin .news .add-news {
  margin-bottom: 20px;
}

.container-admin .news .box {
  margin-bottom: 20px;
}


.container-admin .news li {
  margin-bottom: 40px;
}
</style>

