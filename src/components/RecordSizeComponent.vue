<template>
  <div>
    <h2>How many records? {{ selectedSize }}</h2>
    <select v-model="selectedSize" @change="onSizeSelection">
      <option v-for="size in recordSizes" :key="size" :value="size">{{
        size
      }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RecordSizeComponent",
  data: () => {
    return {
      recordSizes: [3, 5, 10, 20, 25, 50, 75, 100, 200, 250, 500],
      selectedSize: 10,
    };
  },
  methods: {
    ...mapActions(["trimDownCharacters"]),
    onSizeSelection() {
      this.trimDownCharacters(this.selectedSize);
    },
  },
};
</script>

<style></style>
