<template>
  <div class="container-admin news">
    <router-link :to="{ name: 'admin.news.index' }">Back</router-link>
    <h2 class="title is-3">{{ news.title }}</h2>
    <p>{{ getDate }}</p>
    <img :src="news.image" alt="news.title" />
    <p>{{ news.content }}</p>
    <div class="news-buttons">
      <Button :button="'edit'" :type="'news'" :id="news.id"></Button>
      <Button
        :button="'delete'"
        :type="'news'"
        :module="'news'"
        :id="news.id"
      ></Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button,
  },
  methods: {
    ...mapActions({
      fetchNews: "news/fetchNews",
    }),
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

<style>
.news-buttons {
  display: flex;
  margin-top: 20px;
}

.news-buttons button:nth-child(1) {
  margin-right: 20px;
}
</style>