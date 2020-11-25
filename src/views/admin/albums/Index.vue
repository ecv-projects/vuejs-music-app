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
                        :to="{name: 'admin.albums.show', params: {id: item.id}}"
                        >
                            {{ item.name }}
                        </router-link>
                        <b-button size="is-small" type="is-dark" @click="editAlbum(item.id)">Edit album {{ item.id }}</b-button>
                        <b-button size="is-small" type="is-danger" @click="deleteAlbum(item.id)">Delete album</b-button>
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
      fetchAllAlbums: 'albums/fetchAllAlbums',
      deleteAlbum: 'albums/deleteAlbum',
    }),
    editAlbum(id) {
      this.$router.push({ name: 'admin.albums.edit', params: { id: id } })
    },
    deleteAlbum(id) {
      this.deleteAlbum(id)
      this.$router.push({ name: 'admin.albums.index' })
    }
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
