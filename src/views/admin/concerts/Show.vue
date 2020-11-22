<template>
  <div class="container-admin concerts">
    <router-link :to="{ name: 'admin.concerts.index' }">Back</router-link>
    <h2 class="title is-3">{{ concert.name }}</h2>
    <p>{{ artistByConcert.name }}</p>
    <p>Date : {{ getDate }}</p>
    <div class="concerts-buttons">
      <Button :button="'edit'" :type="'concerts'" :id="concert.id"></Button>
      <Button
        :button="'delete'"
        :module="'concerts'"
        :type="'concert'"
        :id="concert.id"
      ></Button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Button from "@/components/buttons/Button";

export default {
  components: {
    Button,
  },
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
    getDate() {
      return Intl.DateTimeFormat("en-GB").format(new Date(this.concert.date));
    },
  },
  async mounted() {
    await this.fetchConcert(this.$route.params.id);
    this.fetchArtists();
    this.getArtistByConcert(this.concert.artistId);
  },
};
</script>

<style>
  .concerts-buttons{
    display: flex;
    margin-top: 20px;
  }

  .concerts-buttons button:nth-child(1) {
    margin-right: 20px;
  }
</style>