<template>
  <div class="container-admin">
    <router-link :to="{ name: 'admin.concerts.index' }">Back</router-link>
    <h2 class="title is-3">{{ concert.name }}</h2>
    <p>{{ artistByConcert.name }}</p>
    <p>{{ getDate }}</p>
    <ButtonEdit :type="'concerts'" :id="concert.id"></ButtonEdit>
    <!--           <p>{{ getDate }}</p> -->
    <!--     <b-button class="is-info is-light" @click="edit">Edit news</b-button>
    <b-button class="is-danger is-light" @click="deleteItem">Delete</b-button> -->
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ButtonEdit from "@/components/buttons/ButtonEdit";

export default {
  components: {
    ButtonEdit,
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