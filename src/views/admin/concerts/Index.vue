<template>
  <div class="container-admin">
    <div class="admin-content concerts">
      <h1>Admin Concert Index</h1>
      <h2>All concerts</h2>
      <b-button class="is-info add-concert" @click="create">Create Concert</b-button>
      <div>
        <ul>
          <li v-for="concert in concerts" :key="concert.id">
            <router-link :to="{ name: 'admin.concerts.show', params: { id: concert.id } }">
              <ConcertCard class="concerts-item"
                :concert="concert"
                :artist="getArtistByConcert(concert.artistId)" :artistUrl="'/admin/artists/'"
              ></ConcertCard>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ConcertCard from "@/components/home/ConcertCard";

export default {
  components: {
    ConcertCard,
  },
  methods: {
    ...mapActions({
      fetchAllConcerts: "concerts/fetchAllConcerts",
      fetchAllArtists: "artists/fetchAllArtists"
    }),
    getArtistByConcert(id) {
      return this.artists.find((artist) => {
        return artist.id === id;
      });
    },
    create() {
      this.$router.push({
        name: "admin.concerts.create"
      })
    }
  },
  computed: {
    ...mapState({
      concerts: (state) => state.concerts.allConcerts,
      artists: (state) => state.artists.allArtists
    }),
  },
  mounted() {
    console.log(this.concerts);
    this.fetchAllConcerts();
    this.fetchAllArtists();
  },
};
</script>

<style>
  .concerts-item {
    margin-bottom:20px
  }
</style>