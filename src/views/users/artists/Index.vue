<template>
  <div>
    <div class="artists">
      <h2 class="title is-2">All artists</h2>
      <div class="artists-container">
        <div v-for="item in artists"
          :key="item.id">
          <ArtistCard :artist="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ArtistCard from "@/components/home/ArtistCard";

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
