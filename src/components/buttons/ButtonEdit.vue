<template>
  <div>
    <b-button class="is-info is-light" @click="editItem">Edit news</b-button>
  </div>
</template>

<script>

export default {
  props: {
    type: String,
    id: Number,
  },
  methods: {
    editItem() {
      this.$router.push({
        name: `admin.${this.type}.edit`,
        params: { id: this.id },
      });
    },
  },
};
</script>