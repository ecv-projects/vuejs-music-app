<template>
    <div class="container-admin">
        <div class="admin-content news">
            <h1>Admin News Index</h1>
            <h2>All news</h2>
            <div>
                <ul>
                    <li
                    v-for="item in news"
                    :key="item.id"
                    >
                        <router-link
                        :to="{name: '', params: {id: item.id}}"
                        >
                            {{ item.title }} {{ item.published }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchManyNews: 'news/fetchManyNews'
    })
  },
  computed: {
    ...mapState({
      news: state => state.news.manyNews
    })
  },
  mounted () {
    this.fetchManyNews();
    console.log(this.news);
  }
}
</script>

<style>
  .container-admin {
    width: 70%;
  }

  .admin-content {
    padding: 10px;
  }

  .admin-content .el-main {
    display: flex;
    justify-content: space-between;
  }
</style>
