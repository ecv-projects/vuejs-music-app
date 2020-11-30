<template>
  <div>
    <div id="artist">
      <h2 class="title is-2">All artists</h2>
      <div class="artists-container">
        <div v-for="item in artists"
          :key="item.id">
            <router-link :to="{ path: `/artists/${item.id}` }">
              <ArtistCard :artist="item"/>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ArtistCard from "@/components/cards/ArtistCard";

export default {
  name: "List of artists",
  components: {
    ArtistCard
  },
  methods: {
    ...mapActions({
      fetchAllArtists: 'artists/fetchAllArtists'
    })
  },
  computed: {
    ...mapState({
      artists: state => state.artists.allArtists
    })
  },
  mounted () {
    this.fetchAllArtists()
  }
}
</script>

<style>

</style>