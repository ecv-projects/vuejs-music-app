<template>
  <div>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="news.image" :alt="news.title" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <small>{{ getDate }}</small>
              </p>
              <h4 class="title is-4">
                {{ news.title }}
              </h4>

            </div>
          </div>
        </article>
      </div>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    news: Object,
  },
  computed: {
      getDate() {
          return Intl.DateTimeFormat('en-GB').format(new Date(this.news.published))
      }
  }
};
</script>

<style>
.box .media .image img {
  max-width: 330px;
}

.news-container .box {
  margin-bottom: 20px;
}
</style>