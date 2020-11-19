<template>
  <div class="container-admin">
    <h2 class="title is-2">Create a news</h2>
    <b-field label="Title">
      <b-input type="text" v-model="title"></b-input>
    </b-field>
    <b-field label="Select a date">
      <b-datepicker
        v-model="published"
        placeholder="Click to select..."
        icon="calendar-today"
        trap-focus
      >
      </b-datepicker>
    </b-field>
    <b-field label="Image">
      <b-input type="text" v-model="image"></b-input>
    </b-field>
    <b-field label="Content">
      <b-input maxlength="1000" type="textarea" v-model="content"></b-input>
    </b-field>
    <b-button class="is-success is-light" @click="create">Create</b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "",
      published: new Date(),
      image: "",
      content: "",
      error: null,
    };
  },
  methods: {
    ...mapActions({
      createNews: "news/createNews",
    }),
    create() {
      const payload = {
        title: this.title,
        published: new Date(this.published),
        image: this.image,
        content: this.content,
      };
      this.createNews(payload);
      this.$router.push({ name: "admin.news.index" });
    },
  },
};
</script>
