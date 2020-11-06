<template>
  <div>
    <h2>{{ artist.name }}</h2>
    <img :src="artist.avatar" :alt="artist.name" />
    <p>{{ artist.description }}</p>
    <p>{{ artist.likes }}</p>
    <p>{{ artist.genreId}}</p>
    <p>Afficher liste concerts</p>
    <p>Afficher liste albums</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      artist: (state) => state.artists.artist,
      genre: (state) => state.genres.genre
    }),
  },
  methods: {
    ...mapActions({
      fetchArtist: 'artists/fetchArtist',
      fetchGenre: 'genres/fetchGenre'
    }),
  },
  mounted() {
    this.fetchArtist(this.$route.params.id);
    this.fetchGenre(1);
  },
};
</script> 

