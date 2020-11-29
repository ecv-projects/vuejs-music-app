<template>
  <div>
    <router-link :to="{ name: 'admin.albums.index' }">Back</router-link>
    <b-field label="Name album">
      <b-input v-model="album.name"></b-input>
    </b-field>

    <b-field label="Released">
      <b-input v-model="album.released"></b-input>
    </b-field>

    <b-field label="Tracks">
      <b-input v-model="album.tracks"></b-input>
    </b-field>
    <b-button type="is-light" @click="saveAlbum"> Update</b-button>
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
