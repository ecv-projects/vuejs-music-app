<template>
  <div>
    <h1 class="title is-1">Home</h1>
    <div class="artists">
      <h2 class="title is-2">Artists</h2>
      <div class="artists-container">
        <div v-for="artist in artists" :key="artist.id">
          <ArtistCard :artist="artist"></ArtistCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="albums">
      <h2 class="title is-2">Lasts albums</h2>
      <div class="albums-container">
        <div v-for="album in getLastAlbums" :key="album.id">
          <AlbumCard
            :album="album"
            :artist="getArtistByAlbum(album.artistId)"
          ></AlbumCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="news">
      <h2 class="title is-2">Lasts news</h2>
      <div class="news-container">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AlbumCard from "../components/home/AlbumCard";
import ArtistCard from "../components/home/ArtistCard";

export default {
  name: "Homepage",
  components: {
    AlbumCard,
    ArtistCard,
  },
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
.albums-container,
.artists-container {
  display: grid;
  gap: 30px;
}

.albums-container {
  grid-template-columns: repeat(2, 1fr);
}

.artists-container {
  grid-template-columns: repeat(3, 1fr);
}

.albums-container .card-header-title {
  justify-content: space-between;
}
</style>
