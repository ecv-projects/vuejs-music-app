<template>
  <div class="container-admin">
    <h2 class="title is-2">Create a news</h2>
    <b-field label="Name">
      <b-input type="text" v-model="name"></b-input>
    </b-field>
    <b-field label="Select a date">
      <b-datepicker
        v-model="date"
        placeholder="Click to select..."
        icon="calendar-today"
        trap-focus
      >
      </b-datepicker>
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
    <b-button class="is-success is-light" @click="create">Create</b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      name: "",
      date: new Date(),
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
      createConcert: "concerts/createConcert",
      fetchAllArtists: "artists/fetchAllArtists"
    }),
    create() {
      const payload = {
        name: this.name,
        date: this.date,
        artist: this.artist,
      };
      this.createConcert(payload);
      this.$router.push({ name: "admin.concerts.index" });
    },
  },
  mounted() {
      this.fetchAllArtists()
  },
};
</script>
