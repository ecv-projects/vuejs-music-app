<template>
  <div>
    <h1 class="title is-1">Home</h1>
    <h2 class="title is-2">Lasts albums</h2>
    <div class="albums-container">
      <div class="card" v-for="item in getLastAlbums" :key="item.id">
        <header class="card-header">
          <div class="card-header-title">
            <p>{{ item.name }}</p>
            <p><i>by {{ getArtistByAlbum(item.artistId).name }}</i></p>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            <p><b>Infos : </b></p>
            <p>Released : {{ item.released }} <br>Tracks : {{ item.tracks }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      albums: (state) => state.albums.allAlbums,
      artists: (state) => state.artists.allArtists,
    }),
    getLastAlbums() {
      return this.albums.slice().sort((a, b) => a.released < b.released);
    },
  },
  methods: {
    ...mapActions({
      fetchAllAlbums: "albums/fetchAllAlbums",
      fetchAllArtists: "artists/fetchAllArtists",
    }),
    getArtistByAlbum(id) {
      return this.artists.find((artist) => {
        return artist.id === id;
      });
    },
  },
  mounted() {
    this.fetchAllAlbums();
    this.fetchAllArtists();
  },
};
</script>

<style>
.albums-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.albums-container .card-header-title {
  justify-content: space-between;
}
</style>
