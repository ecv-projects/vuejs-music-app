<template>
  <div>
    <b-button
      v-if="button === 'create'"
      class="is-success is-light"
      @click="createItem()"
      >Create</b-button
    >

    <b-button
      v-if="button === 'delete'"
      class="is-danger is-light"
      @click="deleteItem()"
      >Delete</b-button
    >
    <b-button
      v-if="button === 'edit'"
      class="is-info is-light"
      @click="goToEditPage()"
      >Edit</b-button
    >

    <b-button v-if="button === 'save'" class="is-success" @click="saveItem()"
      >Save</b-button
    >
    <b-button v-if="button === 'cancel'" class="is-danger" @click="cancel()"
      >Annuler</b-button
    >
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    module: String,
    id: Number,
    button: String,
    payload: Object,
    data: Object,
    text: String,
    className: String,
    functionName: String,
  },
  computed: {
    item() {
      return this.$store.state[this.module][this.type];
    },
    capitalizeFirstLetter() {
      return this.type.charAt(0).toUpperCase() + this.type.slice(1);
    },
  },
  methods: {
    fetch() {
      this.$store.dispatch(
        `${this.module}/fetch${this.capitalizeFirstLetter}`,
        this.id
      );
    },
    createItem() {
      this.$store.dispatch(
        `${this.module}/create${this.capitalizeFirstLetter}`,
        this.data
      );
      this.$router.push({
        name: `admin.${this.module}.index`,
      });
    },
    deleteItem() {
      this.$store.dispatch(
        `${this.module}/delete${this.capitalizeFirstLetter}`,
        this.id
      );
      this.$router.push({
        name: `admin.${this.module}.index`,
      });
    },
    saveItem() {
      this.$store.dispatch(
        `${this.module}/edit${this.capitalizeFirstLetter}`,
        this.payload
      );
      this.$router.push({
        name: `admin.${this.module}.index`,
      });
    },
    goToEditPage() {
      this.$router.push({
        name: `admin.${this.type}.edit`,
        params: { id: this.id },
      });
    },
    cancel() {
      this.$router.push({
        name: `admin.${this.module}.show`,
        params: { id: this.id },
      });
    },
  },
  created() {
    this.fetch(this.id);
  },
};
</script>