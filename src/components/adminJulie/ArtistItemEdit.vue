<template>
  <div>
    <modal-form>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit artist</p>
        </header>
        <section class="modal-card-body">
          <ArtistForm :artist="artist" :edit="true" :add="false" v-on="$listeners"> </ArtistForm>
        </section>
      </div>
    </modal-form>
  </div>
</template>

<script>
import ArtistForm from "@/components/adminJulie/ArtistCard";

export default {
  name: "ArtistItemEdit",
  props: {
    artist: Object
  },
  components: {
    ArtistForm
  }
};
</script>
