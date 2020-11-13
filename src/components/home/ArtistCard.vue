<template>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="artist.avatar" :alt="artist.name" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ artist.name }}</p>
          </div>
        </div>

        <div class="content">
          <p>{{ artist.description.substring(0, 70) }}...</p>
          <p>
            <router-link :to="{ path: `/artists/${artist.id}` }">
              Voir plus
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistCard",
  props: {
    artist: Object,
  },
};
</script>

<style>
.artists-container .card-image {
  background-color: #faf9f9;
}
.artists-container .card-image img {
  width: auto!important;
  margin: auto;
}
</style>