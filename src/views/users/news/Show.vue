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
              <p>{{ news.content }}</p>
            </div>
          </div>
        </article>
      </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchNews: 'news/fetchNews',
    })
  },
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  },
  mounted () {
    this.fetchNews(this.$route.params.id)
  }
}
</script>