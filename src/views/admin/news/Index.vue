<template>
  <div class="container-admin">
    <div class="admin-content news">
      <h2 class="title is-2">All news</h2>
      <b-button class="is-info add-news" @click="create">Create News</b-button>
      <b-field label="">
        <b-input
          type="text"
          placeholder="Search a news"
          v-model="search"
        ></b-input>
      </b-field>
      <div>
        <ul>
          <li v-for="item in filteredList" :key="item.id">
            <router-link
              :to="{ name: 'admin.news.show', params: { id: item.id } }"
            >
              <NewsCard :news="item" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NewsCard from "@/components/home/NewsCard";

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
  },
  computed: {
    ...mapState({
      news: (state) => state.news.manyNews,
    }),
    filteredList() {
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
</style>

