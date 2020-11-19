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
          <div >
            <ArtistCard  :artist="artist" class="testttttttt" :id="artist.id" v-for="(artist, index) in artists" :key="artist.id" v-on:edit-artist="editThisArtist(artists.indexOf(artist), artist.id)" v-on:delete-artist="deleteThisArtist(index, artist.id)"></ArtistCard>
          </div>
        </ul>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ArtistCard from "@/components/adminJulie/ArtistCard";
import ArtistForm from "@/components/adminJulie/ArtistForm";

export default {
  name: "AdminArtists",
  components: {
    ArtistCard
  },
  methods: {
    ...mapActions({
      fetchAllArtists: 'artists/fetchAllArtists',
      deleteArtist: 'artists/deleteArtist'
    }),
    editThisArtist: function(index, id) {
      this.artists[index] = this.artist;
      this.editArtist(id);
    },
      deleteThisArtist: function(index, id) {
      this.artists.splice(index, 1);
      this.deleteArtist(id);
    }
  },
  computed: {
    ...mapState({
      artists: state => state.artists.allArtists
    })
  },
  mounted () {
    this.fetchAllArtists();
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