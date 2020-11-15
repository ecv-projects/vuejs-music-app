<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="artist.avatar" :alt="artist.name" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ artist.name }}</p>
            <p>{{ artist.description }}</p>
            <p>{{ artist.likes }}</p>
            <p>{{ genre.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="albums">
      <h2 class="title is-2">Discography</h2>
      <div class="albums-container">
        <div v-for="album in getAlbumByArtistId(artist.id)" :key="album.id">
          <AlbumCard :album="album" :artist="artist" />
        </div>
      </div>
    </div>

    <div class="concerts">
      <h2 class="title is-2">Concerts</h2>
      <div class="concerts-container">
        <div v-if="getConcertByArtistId(artist.id).length">
          <div v-for="concert in getConcertByArtistId(artist.id)" :key="concert.id">
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
import AlbumCard from "@/components/home/AlbumCard";
import ConcertCard from "@/components/home/ConcertCard";

export default {
  name: "Artists",
  components: {
    AlbumCard,
    ConcertCard
  },
  computed: {
    ...mapState({
      artist: (state) => state.artists.artist,
      genre: (state) => state.genres.genre,
      allAlbums: (state) => state.albums.allAlbums,
      allConcerts: (state) => state.concerts.allConcerts,
    })
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
    }
  },
  async mounted() {
    await this.fetchArtist(this.$route.params.id);
    this.fetchGenre(this.artist.genreId);
    this.fetchAllAlbums();
    this.fetchAllConcerts();
  }
};
</script>
