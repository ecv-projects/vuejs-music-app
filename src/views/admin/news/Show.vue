<template>
  <div class="container-admin">
    <router-link :to="{ name: 'admin.news.index' }"
      >Back</router-link
    >
    <h2 class="title is-3">{{ news.title }}</h2>
    <p>{{ getDate }}</p>
    <img :src="news.image" alt="news.title" />
    <p>{{ news.content }}</p>
    <b-button class="is-info is-light" @click="edit">Edit news</b-button>
    <b-button class="is-danger is-light" @click="deleteItem">Delete</b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions({
      fetchNews: "news/fetchNews",
      deleteNews: "news/deleteNews",
    }),
    edit() {
      this.$router.push({
        name: "admin.news.edit",
        params: { id: this.news.id },
      });
    },
    deleteItem() {
      this.deleteNews(this.$route.params.id);
      this.$router.push({ name: "admin.news.index" });
    },
  },
  computed: {
    ...mapState({
      news: (state) => state.news.news,
    }),
    getDate() {
      return Intl.DateTimeFormat("en-GB").format(new Date(this.news.published));
    },
  },
  mounted() {
    this.fetchNews(this.$route.params.id);
  },
};
</script>
