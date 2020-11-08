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
        <b-menu class="admin-menu">
          <b-menu-list label="Edition menu">
            <b-menu-item label="Albums" icon="link" tag="router-link"  to="/admin/albums"></b-menu-item>
            <b-menu-item label="Artists" icon="link" tag="router-link"  to="/admin/artists"></b-menu-item>
            <b-menu-item label="Concerts" icon="link" tag="router-link"  to="/admin/concerts"></b-menu-item>
            <b-menu-item label="News" icon="link" tag="router-link" to="/admin/news"></b-menu-item>
          </b-menu-list>

          <b-menu-list label="Actions">
            <b-menu-item label="Logout"></b-menu-item>
          </b-menu-list>
        </b-menu>
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
    display: flex;
    justify-content: space-between;
  }

  .admin-content {
    padding: 10px;
  }

  .admin-menu {
    height: 100vh;
    padding: 20px 40px;
    background-color: lightgrey;
  }

</style>
