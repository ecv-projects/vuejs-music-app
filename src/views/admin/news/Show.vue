<template>
  <div class="container-admin">
    <router-link :to="{ name: 'admin.news.index' }"
      >Back</router-link
    >
    <h2 class="title is-3">{{ news.title }}</h2>
    <p>{{ getDate }}</p>
    <img :src="news.image" alt="news.title" />
    <p>{{ news.content }}</p>
    <ButtonEdit :type="'news'" :id="news.id"></ButtonEdit>
    <ButtonDelete :type="'news'" :id="news.id"></ButtonDelete>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ButtonEdit from '@/components/buttons/ButtonEdit';
import ButtonDelete from '@/components/buttons/ButtonDelete';


export default {
  components: {
    ButtonEdit,
    ButtonDelete
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
