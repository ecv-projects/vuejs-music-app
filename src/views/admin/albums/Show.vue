<template>
  <div class="container-admin">
    <router-link :to="{ name: 'admin.albums.index' }">Back</router-link>
    <h2 class="title is-3"> {{ album.name }} </h2>
    <p> Released : {{ album.released }} </p>
    <p> Tracks : {{ album.tracks }} </p>
    <div class="albums-buttons">
      <b-button type="is-info is-light" @click="editAlbum">Edit</b-button>
        <Button
          :button="'delete'"
          :module="'albums'"
          :type="'album'"
          :id="album.id"
        ></Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button,
  },
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

<style>
  .albums-buttons{
    display: flex;
    margin-top: 20px;
  }

  .albums-buttons button:nth-child(1) {
    margin-right: 20px;
  }
</style>
