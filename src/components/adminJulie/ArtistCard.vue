<template>
    <div>
        <header>
          <div class="admin-content--artists__item__image">
              <figure class="image is-4by3">
              <img :src="artist.avatar" :alt="artist.name" />
              </figure>
          </div>
            <p class="admin-content--artists__item__title title is-4">{{ artist.name }}</p>
        </header>
          <div class="admin-content--artists__item__content">
              <p>{{ artist.origin }}</p>
              <p>{{ artist.description.substring(0, 70) }}...</p>
              <p class="admin-content--artists__item__likes">{{ artist.likes }}<img src="../../assets/heart.svg"></p>
          </div>
    </div>
</template>  

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: "ArtistCard",
  props: {
    artist: Object
  },
  computed: {
    ...mapState({
      artists: state => state.artists.allArtists,
    })
  },
  methods: {
    ...mapActions({
      fetchAllArtists: 'artists/fetchAllArtists'
    })
  },
  mounted () {
    this.fetchAllArtists();
  }
}
</script>
