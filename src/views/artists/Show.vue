<template>
  <div v-if="user">
    <h2>{{ artist.name }}</h2>
    <img :src="artist.avatar" :alt="artist.name" />
    <p>{{ artist.description }}</p>
    <p>{{ artist.likes }}</p>
    <p>Afficher genre via genreId</p>
    <p>Afficher liste concerts</p>
    <p>Afficher liste albums</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      user: false,
    };
  },
  computed: {
    ...mapState({
      artist: (state) => state.artists.artist,
    }),
  },
  methods: {
    ...mapActions({
      fetchArtist: "artists/fetchArtist",
    }),
  },
  mounted() {
    this.fetchArtist(this.$route.params.id);
  },
};
</script> 
