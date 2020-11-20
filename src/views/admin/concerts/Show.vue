<template>
  <div class="container-admin">
    <router-link :to="{ name: 'admin.concerts.index' }">Back</router-link>
    <h2 class="title is-3">{{ concert.name }}</h2>
    <p>{{ artistByConcert.name }}</p>
    <p>{{ concert.date }}</p>
    <!--           <p>{{ getDate }}</p> -->
    <!--     <b-button class="is-info is-light" @click="edit">Edit news</b-button>
    <b-button class="is-danger is-light" @click="deleteItem">Delete</b-button> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      artistByConcert: "",
    };
  },
  methods: {
    ...mapActions({
      fetchConcert: "concerts/fetchConcert",
      fetchArtists: "artists/fetchAllArtists",
    }),
    getArtistByConcert(id) {
      this.artistByConcert = this.artists.find((artist) => {
        return artist.id === id;
      });
    },
  },
  computed: {
    ...mapState({
      concert: (state) => state.concerts.concert,
      artists: (state) => state.artists.allArtists,
    }),
  },
  async mounted() {
    await this.fetchConcert(this.$route.params.id);
    this.fetchArtists();
    this.getArtistByConcert(this.concert.artistId);
  },
};
</script>