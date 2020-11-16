<template>
    <div class="container-admin">
      <div class="admin-content admin-content--artists">
          <h1>All artists</h1>
          <b-button
          type="is-success"
          class="admin-content--artists__item__option admin-content--artists__item__option--create"
          >Add artist</b-button
          >
        <ul class="admin-content--artists__list">
          <div v-for="artist in artists" :key="artist.id" class="admin-content--artists__item">
            <ArtistCard :artist="artist"></ArtistCard>
            <footer class="admin-content--artists__item__options">
              <b-button
              type="is-info is-light"
              class="admin-content--artists__item__option admin-content--artists__item__option--edit"
              @click="editArtist"
              >Edit</b-button
              >
              <b-button
              @click="deleteArtist(artist.id)"
              type="is-danger is-light"
              class="admin-content--artists__item__option admin-content--artists__item__option--delete"
              :id="artist.id"
              >Delete</b-button
              >
            </footer>
          </div>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ArtistCard from "@/components/adminJulie/ArtistCard";
export default {
  name: "Admin artists",
  components: {
    ArtistCard
  },
  methods: {
    ...mapActions({
      fetchAllArtists: 'artists/fetchAllArtists',
      deleteArtist: 'artists/deleteArtist'
    })
  },
  computed: {
    ...mapState({
      artists: state => state.artists.allArtists
    })
  },
  mounted () {
    this.fetchAllArtists();
    this.deleteArtist();
    // Observable deletion  this.$set(artist)
  }
}
</script>

<style>
.admin-content--artists__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.admin-content--artists__item {
  padding: 10px;
  margin: 0 10px 20px 0;
  width: 30%;
}
.admin-content--artists__item__image, .admin-content--artists__item__content {
  margin-bottom: 10px;
}
.admin-content--artists__item__likes img {
  margin: 0 10px;
  width: 15px;
  height: 15px;
}
.admin-content--artists__item__options {
  display: flex;
  justify-content: space-between;
}
</style>