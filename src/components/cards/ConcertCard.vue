<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <p>{{ concert.name }}</p>
        <p>
          by
          <router-link :to="{ path: `${artistUrl}${artist.id}` }">{{
            artist.name
          }}</router-link>
        </p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <p><b>Infos : </b></p>
        <p>Date : {{ getDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConcertCard",
  props: {
    concert: Object,
    artist: Object,
    artistUrl: String
  },
  computed: {
    getDate() {
      return Intl.DateTimeFormat("en-GB").format(new Date(this.concert.date));
    },
  },
};
</script>

<style>
.card-header-title {
  display: flex;
  justify-content: space-between;
}
</style>