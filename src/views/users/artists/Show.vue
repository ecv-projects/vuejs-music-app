<template>
  <div>
    <router-link :to="{ name: 'artists.index' }">Artists List</router-link>

    <div id="artist-detail">
      <img :src="artist.avatar" :alt="artist.name" />
      <div class="artist-infos">
        <h1 class="title is-1">{{ artist.name }}</h1>
        <p>{{ artist.description }}</p>
        <p>Likes : {{ artist.likes }}</p>
        <p>Genre : {{ genre.name }}</p>
      </div>
    </div>

    <div id="artist-albums" class="albums">
      <h2 class="title is-2">Discography</h2>
      <div class="albums-container">
        <div v-for="album in getAlbumByArtistId(artist.id)" :key="album.id">
          <AlbumCard :album="album" :artist="artist" />
        </div>
      </div>
    </div>

    <div id="artist-concerts" class="concerts">
      <h2 class="title is-2">Concerts</h2>
      <div class="concerts-container">
        <div v-if="getConcertByArtistId(artist.id).length">
          <div
            v-for="concert in getConcertByArtistId(artist.id)"
            :key="concert.id"
          >
            <ConcertCard :concert="concert" :artist="artist" />
          </div>
        </div>
        <div v-else>Pas de concerts prévus !</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AlbumCard from "@/components/cards/AlbumCard";
import ConcertCard from "@/components/cards/ConcertCard";

export default {
  name: "Artists",
  components: {
    AlbumCard,
    ConcertCard,
  },
  computed: {
    ...mapState({
      artist: (state) => state.artists.artist,
      genre: (state) => state.genres.genre,
      allAlbums: (state) => state.albums.allAlbums,
      allConcerts: (state) => state.concerts.allConcerts,
    }),
  },
  methods: {
    ...mapActions({
      fetchArtist: "artists/fetchArtist",
      fetchGenre: "genres/fetchGenre",
      fetchAllAlbums: "albums/fetchAllAlbums",
      fetchAllConcerts: "concerts/fetchAllConcerts",
    }),
    getAlbumByArtistId(id) {
      return this.allAlbums.filter((album) => {
        return album.artistId === id;
      });
    },
    getConcertByArtistId(id) {
      return this.allConcerts.filter((concert) => {
        return concert.artistId === id;
      });
    },
  },
  async mounted() {
    await this.fetchArtist(this.$route.params.id);
    this.fetchGenre(this.artist.genreId);
    this.fetchAllAlbums();
    this.fetchAllConcerts();
  },
};
</script>

<style>
#artist-detail {
  display: flex;
  margin: 40px 0;
}

#artist-detail .artist-infos {
  margin-left: 30px;
}

#artist-detail img {
  width: auto;
  max-height: 500px;
}

#artist-albums {
  margin-bottom: 40px;
}
</style>