<template>
  <ArtistForm 
  :artist="artist" 
  :edit="true" 
  :add="false"
  />
</template>

<script>
import ArtistForm from "@/components/adminJulie/ArtistForm";

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
