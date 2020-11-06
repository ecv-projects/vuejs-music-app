<template>
  <div>
    <ul>
      <li
      v-for="item in artists"
      :key="item.id"
      >
    <!-- <router-link
      :to="{name: 'artists.show', params: {id: item.id}}"
    >
    {{ item.title }}
    </router-link> -->
    <p>{{ item.name }}</p>
    </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
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