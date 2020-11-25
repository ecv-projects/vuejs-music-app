<template>
  <div class="home-content">
    <h1 class="title is-1">Home</h1>
    <div class="artists">
      <div class="artists-header">
        <h2 class="title is-2">Artists</h2>
        <router-link :to="{ path: '/artists' }"> See all artists </router-link>
      </div>

      <div class="artists-container">
        <div v-for="artist in artists" :key="artist.id">
          <ArtistCard :artist="artist"></ArtistCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="albums">
      <h2 class="title is-2">Lasts albums</h2>
      <div class="albums-container">
        <div v-for="album in getLastAlbums" :key="album.id">
          <AlbumCard
            :album="album"
            :artist="getArtistByAlbum(album.artistId)"
          ></AlbumCard>
        </div>
      </div>
    </div>
    <hr />
    <div class="news">
      <div class="news-header">
        <h2 class="title is-2">3 lasts news</h2>
        <router-link :to="{ path: '/news' }"> See all news </router-link>
      </div>
      <div class="news-container">
        <div v-for="news in getLastNews.slice(0, 3)" :key="news.id">
          <router-link :to="{ path: `/news/${news.id}` }">
            <NewsCard :news="news"></NewsCard>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AlbumCard from "../components/home/AlbumCard";
import ArtistCard from "../components/home/ArtistCard";
import NewsCard from "../components/home/NewsCard";

export default {
  name: "Homepage",
  components: {
    AlbumCard,
    ArtistCard,
    NewsCard,
  },
  computed: {
    ...mapState({
      albums: (state) => state.albums.allAlbums,
      artists: (state) => state.artists.allArtists,
      manyNews: (state) => state.news.manyNews,
    }),
    getLastAlbums() {
      return this.albums.slice().sort((a, b) => a.released < b.released);
    },

    getLastNews() {
      return this.manyNews.slice().sort((a, b) => a.published < b.published);
    },
  },
  methods: {
    ...mapActions({
      fetchAllAlbums: "albums/fetchAllAlbums",
      fetchAllArtists: "artists/fetchAllArtists",
      fetchManyNews: "news/fetchManyNews",
    }),
    getArtistByAlbum(id) {
      return this.artists.find((artist) => {
        return artist.id === id;
      });
    },
  },
  mounted() {
    this.fetchAllAlbums();
    this.fetchAllArtists();
    this.fetchManyNews();
  },
};
</script>

<style>
.albums-container,
.artists-container {
  display: grid;
  gap: 30px;
}

.albums-container {
  grid-template-columns: repeat(2, 1fr);
}

.artists-container {
  grid-template-columns: repeat(3, 1fr);
}

.albums-container .card-header-title {
  justify-content: space-between;
}

.news .news-header,
.artists .artists-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.admin-content .home-content {
  width: 70%;
}
</style>

