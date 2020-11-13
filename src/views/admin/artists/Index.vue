<template>
    <div class="container-admin">
        <div class="admin-content artists">
            <h1>Admin Artist Index</h1>
            <h2>All artists</h2>
            <div>
              <ul>
                <li
                  v-for="item in artists"
                  :key="item.id"
                  >
                    <router-link
                    :to="{name: '', params: {id: item.id}}"
                    >
                      {{ item.name }}
                    </router-link>
                </li>
              </ul>
            </div>
        </div>
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
    this.fetchAllArtists();
  }
}
</script>
