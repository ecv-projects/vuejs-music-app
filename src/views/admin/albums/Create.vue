<template>
  <div class="container-admin">
    <router-link :to="{ name: 'admin.albums.index' }">Back</router-link>
    <h2 class="title is-2">Create a album</h2>
    <b-field label="Name">
      <b-input type="text" v-model="name"></b-input>
    </b-field>
    <b-field label="Released">
      <b-input type="text" v-model="released"></b-input>
    </b-field>
    <b-field label="Tracks">
      <b-input type="text" v-model="tracks"></b-input>
    </b-field>
    <b-field label="Artist">
      <b-select placeholder="Select a name" v-model="artist">
                <option
                    v-for="artist in artists"
                    :value="artist.id"
                    :key="artist.id">
                    {{ artist.name }}
                </option>
            </b-select>
    </b-field>
    <Button
      :type="'album'"
      :module="'albums'"
      :button="'create'"
      :data="{
        name: this.name,
        released: this.released,
        tracks: this.tracks,
        artistId: this.artist,
      }"
    ></Button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Button from '@/components/buttons/Button'

export default {
  components: {
    Button
  },
  data() {
    return {
      name: "",
      released: "",
      tracks: "",
      artist: "",
      error: null,
    };
  },
  computed: {
      ...mapState({
          artists: (state) => state.artists.allArtists
      })
  },
  methods: {
    ...mapActions({
      fetchAllArtists: "artists/fetchAllArtists"
    }),
  },
  mounted() {
      this.fetchAllArtists()
  },
};
</script>
