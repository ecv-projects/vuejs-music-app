<template>
  <div>
    <b-field label="">
      <b-input
        type="text"
        placeholder="Search a news"
        v-model="search"
      ></b-input>
      {{ filteredList }}
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    arrayToFilter: Array,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    filteredList(arrayToFilter) {
      console.log("djkslx")
      this.arrayToFilter.filter((arrayToFilter) => {
        this.$emit(
          "change",
          arrayToFilter.title.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
};
</script>