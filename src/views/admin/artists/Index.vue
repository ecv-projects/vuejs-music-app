<template>
    <div class="container-admin">
      <div class="admin-content admin-content--artists">
        <h2 class="title is-2">All artists</h2>
        <section>
          <b-button 
          type="is-success is-light"
          @click="isComponentModalActive = true">
          Add artist
          </b-button>
          <b-modal 
              v-model="isComponentModalActive"
              has-modal-card
              trap-focus
              :destroy-on-hide="false"
              aria-role="dialog"
              aria-modal>
                <ArtistForm 
                :edit="false" :add="true"
                v-on:close="isComponentModalActive = false"
                v-on:add-artist="addThisArtist()"
                />
          </b-modal>
        </section>
        <ul class="admin-content--artists__list">
            <ArtistCard  
            :artist="artist" 
            class="admin-content--artists__item" 
            :id="artist.id" v-for="(artist, index) in artists" 
            :key="artist.id"  
            v-on:delete-artist="deleteThisArtist(index, artist.id)" 
            />
        </ul>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ArtistCard from "@/components/artist/ArtistCard";
import ArtistForm from "@/components/artist/ArtistForm";


export default {
  name: "AdminArtists",
  components: {
    ArtistCard,
    ArtistForm
  },
  props: {
    artist: Object
  },
  data() {
    return {
      isComponentModalActive: false,
    }
},
  methods: {
    ...mapActions({
      fetchAllArtists: 'artists/fetchAllArtists',
      deleteArtist: 'artists/deleteArtist',
      editArtist: 'artists/editArtist'
    }),
    addThisArtist() {
      this.artists.push(this.artist);
      this.fetchAllArtists();
    },
    deleteThisArtist: function(index, id) {
      this.artists.splice(index, 1);
      this.deleteArtist(id);
    }
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

<style>

body {
  line-height: 1.5;
}

.button {
  margin:10px;
}

.is-3 {
  margin-bottom: 10px;
}

.admin-content--artists__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.admin-content--artists__item {
  padding: 10px;
  margin: 0 10px 20px 0;
  width: 30%;
}
.admin-content--artists__item__image, .admin-content--artists__item__content {
  margin-bottom: 10px;
}
.admin-content--artists__item__likes img {
  margin: 0 10px;
  width: 15px;
  height: 15px;
}
.admin-content--artists__item__options {
  display: flex;
  justify-content: space-between;
}
</style>