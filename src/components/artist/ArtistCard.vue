<template>
    <div>
        <header>
          <div class="admin-content--artists__item__image">
              <figure class="image is-4by3">
              <img :src="artist.avatar" :alt="artist.name" />
              </figure>
          </div>
            <h2 class="admin-content--artists__item__title title is-3">{{ artist.name }}</h2>
        </header>
          <div class="admin-content--artists__item__content">
              <p>{{ artist.origin }}</p>
              <p>{{ artist.description }}...</p>
              <p class="admin-content--artists__item__likes">{{ artist.likes }}<img src="../../assets/heart.svg"></p>
          </div>
          <b-button
          type="is-info is-light"
          class="admin-content--artists__item__option admin-content--artists__item__option--edit"
            @click="isComponentModalActive = true">
            Edit
          </b-button>
          <b-modal 
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <ArtistItemEdit
              :artist="artist"
              :edit="true" :add="false"
              v-on:close="isComponentModalActive = false"
              v-on:edit-artist="editThisArtist(artist.id)"
            />
          </b-modal>
          <b-button
          @click="$emit('delete-artist')"
          type="is-danger is-light"
          class=" admin-content--artists__item__option admin-content--artists__item__option--delete"
          :id="artist.id"
          >Delete</b-button
          >
    </div>
</template>  

<script>
import { mapActions, mapState } from 'vuex'
import ArtistItemEdit from "@/components/adminJulie/ArtistItemEdit";

export default {
  name: "ArtistCard",
  props: {
    artist: Object
  },
  components: {
    ArtistItemEdit
  },
  data() {
    return {
      isComponentModalActive: false,
    }
},
  computed: {
    ...mapState({
      artists: state => state.artists.allArtists,
    })
  },
  methods: {
    ...mapActions({
      fetchAllArtists: 'artists/fetchAllArtists',
      deleteArtist: 'artists/deleteArtist'
    }),
    editThisArtist(id) {
      const found = this.artists.find(element => element.id === id);
      const index = (this.artists.indexOf(found));
      this.artists.splice(index, 0, this.artist);
      console.log('fsfsd');
    },
  },
  mounted () {
    this.fetchAllArtists();
  }
}
</script>
