<template>
  <div>
    <h2>Filter Characters</h2>
    <input type="text" v-model="filterText" @keyup="onChange" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterCharactersComponent",
  data: () => {
    return {
      filterText: "",
    };
  },
  methods: {
    ...mapActions(["filterDownCharacters"]),
    onChange() {
      //console.log(this.filterText);
      this.filterDownCharacters(this.filterText);
    },
  },
};
</script>

<style></style>
