<template>
    <div class="container-admin">
        <div class="admin-content albums">
            <h2 class="title is-2">All albums</h2>
            <b-button class="is-info" @click="create">Add Album</b-button>
            <div>
                <ul>
                    <li
                    v-for="item in albums"
                    :key="item.id"
                    >
                        <AlbumCard  class="album-item"
                          :album="item"
                          :artist="getArtistByAlbum(item.artistId)"
                        ></AlbumCard>
                    <b-button type="is-primary is-light" @click="showAlbum(item.id)">Show album</b-button>                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AlbumCard from "@/components/cards/AlbumCard";

export default {
  components: {
    AlbumCard
  },
  methods: {
    ...mapActions({
      fetchAllAlbums: 'albums/fetchAllAlbums',
      fetchAllArtists: "artists/fetchAllArtists",
    }),
    showAlbum(id) {
      this.$router.push({ name: 'admin.albums.show', params: { id: id } })
    },
    create() {
      this.$router.push({
        name: "admin.albums.create"
      })
    },
    getArtistByAlbum(id) {
      return this.artists.find((artist) => {
        return artist.id === id;
      });
    },
  },
  computed: {
    ...mapState({
      albums: state => state.albums.allAlbums,
      artists: (state) => state.artists.allArtists
    })
  },
  mounted () {
    this.fetchAllAlbums();
    this.fetchAllArtists();
  }
}
</script>

<style>
  .container-admin {
    width: 70%;
  }

  .admin-content {
    padding: 10px;
  }

  .admin-content .el-main {
    display: flex;
    justify-content: space-between;
  }

  .album-item {
  margin-bottom: 20px;
}

  .albums ul li {
    margin-bottom: 50px;
  }
</style>
