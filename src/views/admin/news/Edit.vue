<template>
  <div class="container-admin">

    <b-field label="Title">
      <b-input type="text" v-model="news.title"></b-input>
    </b-field>
    <b-field label="Select a date">
      <b-datepicker
        v-model="getGoodDateFormat"
        placeholder="Click to select..."
        icon="calendar-today"
        trap-focus
      >
      </b-datepicker>
    </b-field>
    <b-field label="Image">
      <b-input type="text" v-model="news.image"></b-input>
    </b-field>
    <b-field label="Content">
      <b-input
        maxlength="1000"
        type="textarea"
        v-model="news.content"
      ></b-input>
    </b-field>
    <b-button class="is-success" @click="save">Save</b-button>
    <b-button class="is-danger" @click="cancel">Annuler</b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      dateEdit: Date,
    };
  },
  computed: {
    ...mapState({
      news: (state) => state.news.news,
    }),
    getGoodDateFormat: {
      get() {
        return new Date(this.news.published);
      },
      set(val) {
        this.dateEdit = val;
      },
    },
  },
  methods: {
    ...mapActions({
      fetchNews: "news/fetchNews",
      editNews: "news/editNews",
    }),
    save() {
      console.log(this.news);
      console.log({
        id: this.news.id,
        content: this.news.content,
        image: this.news.image,
        published: this.dateEdit,
        title: this.news.title,
      });
      this.editNews({
        id: this.news.id,
        content: this.news.content,
        image: this.news.image,
        published: this.dateEdit,
        title: this.news.title,
      });
      this.$router.push({ name: "admin.news.index" });
    },
    cancel() {
      this.$router.push({
        name: "admin.news.show",
        params: { id: this.news.id },
      });
    },
  },
  mounted() {
    this.fetchNews(this.$route.params.id);
    console.log(this.dateEdit);
  },
};
</script>
