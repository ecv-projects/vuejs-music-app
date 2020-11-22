<template>
  <div>
    <b-button class="is-danger is-light" @click="deleteItem()">Delete</b-button>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    id: Number,
  },
  computed: {
    item() {
      return this.$store.state[this.type][this.type];
    },
    capitalizeFirstLetter() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    },
  },
  methods: {
    fetch() {
      this.$store.dispatch(
        `${this.type}/fetch${this.capitalizeFirstLetter}`,
        this.id
      );
    },
    delete() {
      this.$store.dispatch(
        `${this.type}/delete${this.capitalizeFirstLetter}`,
        this.id
      );
    },
    deleteItem() {
      this.delete(this.id);
      this.$router.push({
        name: `admin.${this.type}.index`,
      });
    },
  },
  created() {
    this.fetch(this.id);
  },
};
</script>