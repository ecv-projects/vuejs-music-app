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
    <Button
      :button="'save'"
      :type="'news'"
      :module="'news'"
      :id="news.id"
      :payload="{
        id: this.news.id,
        content: this.news.content,
        image: this.news.image,
        published: this.dateEdit,
        title: this.news.title,
      }"
    ></Button>
    <Button
      :button="'cancel'"
      :type="'news'"
      :module="'news'"
      :id="news.id"
    ></Button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button,
  },
  data() {
    return {
      dateEdit: Date
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
    })
  },
  mounted() {
    this.fetchNews(this.$route.params.id);
  },
};
</script>
