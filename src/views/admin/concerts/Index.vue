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
                :artist="getArtistByConcert(concert.artistId)"
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
    }),
    getArtistByConcert(id) {
      return this.concerts.find((artist) => {
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
    }),
  },
  mounted() {
    console.log(this.concerts);
    this.fetchAllConcerts();
  },
};
</script>

<style>
  .concerts-item {
    margin-bottom:20px
  }
</style>