<template>
  <div>
    <b-field label="Name album">
      <b-input v-model="album.name"></b-input>
    </b-field>

    <b-field label="Released">
      <b-input v-model="album.released"></b-input>
    </b-field>

    <b-field label="Tracks">
      <b-input v-model="album.tracks"></b-input>
    </b-field>
    <b-button size="is-small" type="is-dark" @click="saveAlbum"> Update album </b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      album: state => state.albums.album
    })
  },
  methods: {
    ...mapActions({
      fetchAlbum: 'albums/fetchAlbum',
      editAlbum: 'albums/editAlbum'
    }),
    saveAlbum () {
      this.editAlbum(this.album)
      this.$router.push({ name: 'admin.albums.index' })
    }
  },
  mounted () {
    this.fetchAlbum(this.$route.params.id)
  }
}
</script>
