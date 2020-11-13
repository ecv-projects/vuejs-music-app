<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">
        <p>{{ concert.name }}</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <p><b>Infos : </b></p>
        <p>
          {{ concert.date }}
        </p>
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
  },
};
</script>