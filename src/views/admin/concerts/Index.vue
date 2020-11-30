<template>
  <div class="container-admin">
    <div class="admin-content concerts">
      <h2 class="title is-2">All concerts</h2>
      <b-button class="is-info add-concert" @click="create"
        >Add Concert</b-button
      >
      <div>
        <ul>
          <li v-for="concert in concerts" :key="concert.id">
              <ConcertCard
                class="concerts-item"
                :concert="concert"
                :artist="getArtistByConcert(concert.artistId)"
                :artistUrl="'/admin/artists/'"
              ></ConcertCard>
              <b-button
                type="is-primary is-light"
                @click="showConcert(concert.id)"
                >Show Concert</b-button
              >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ConcertCard from "@/components/cards/ConcertCard";

export default {
  components: {
    ConcertCard,
  },
  methods: {
    ...mapActions({
      fetchAllConcerts: "concerts/fetchAllConcerts",
      fetchAllArtists: "artists/fetchAllArtists",
    }),
    getArtistByConcert(id) {
      return this.artists.find((artist) => {
        return artist.id === id;
      });
    },
    showConcert(id) {
      this.$router.push({ name: "admin.concerts.show", params: { id: id } });
    },
    create() {
      this.$router.push({
        name: "admin.concerts.create",
      });
    },
  },
  computed: {
    ...mapState({
      concerts: (state) => state.concerts.allConcerts,
      artists: (state) => state.artists.allArtists,
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
  margin-bottom: 20px;
}

.container-admin .concerts li {
  margin-bottom: 40px;
}
</style>