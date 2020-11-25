<template>
  <div>
    <h2> {{ album.name }} </h2>
    <p> {{ album.released }} </p>
    <p> {{ album.tracks }} </p>
    <b-button size="is-small" type="is-dark" @click="editAlbum">Edit album</b-button>
    <b-button size="is-small" type="is-danger" @click="deleteAlbum">Delete album</b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchAlbum: 'albums/fetchAlbum',
      deleteAlbum: 'albums/deleteAlbum'
    }),
    editAlbum () {
      this.$router.push({ name: 'admin.albums.edit', params: { id: this.album.id } })
    },
    deleteAlbum () {
      this.deleteAlbum(this.$route.params.id)
      this.$router.push({ name: 'admin.albums.index' })
    }
  },
  computed: {
    ...mapState({
      album: state => state.albums.album
    })
  },
  mounted () {
    this.fetchAlbum(this.$route.params.id)
  }
}
</script>
