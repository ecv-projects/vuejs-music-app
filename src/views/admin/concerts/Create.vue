<template>
  <div class="container-admin">
    <h2 class="title is-2">Create a concert</h2>
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
    <Button
      :type="'concert'"
      :module="'concerts'"
      :button="'create'"
      :data="{
        name: this.name,
        date: this.date,
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
      fetchAllArtists: "artists/fetchAllArtists"
    }),
  },
  mounted() {
      this.fetchAllArtists()
  },
};
</script>
