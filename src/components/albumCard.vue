<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <p>{{ album.name }}</p>
        <p>
          <i>by {{ artist.name }}</i>
        </p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <p><b>Infos : </b></p>
        <p>
          Released : {{ album.released }} <br />Tracks :
          {{ album.tracks }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: {
    album: Object,
    artist: Object
  },
};
</script>