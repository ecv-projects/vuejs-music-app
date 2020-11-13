<template>
    <div class="container-admin">
        <div class="admin-content albums">
            <h1>Admin Album Index</h1>
            <h2>All albums</h2>
            <div>
                <ul>
                    <li
                    v-for="item in albums"
                    :key="item.id"
                    >
                        <router-link
                        :to="{name: '', params: {id: item.id}}"
                        >
                            {{ item.name }}
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
      fetchAllAlbums: 'albums/fetchAllAlbums'
    })
  },
  computed: {
    ...mapState({
      albums: state => state.albums.allAlbums
    })
  },
  mounted () {
    this.fetchAllAlbums();
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
