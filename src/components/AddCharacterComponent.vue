<template>
  <div>
    <h2>character is {{ characterName }}</h2>
    <form @submit="onSubmit">
      <input type="text" v-model="characterName" />
      <input type="submit" value="Add character" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddCharacterComponent",
  data: () => {
    return {
      characterName: "",
    };
  },
  methods: {
    ...mapActions(["addCharacter"]),
    onSubmit(e) {
      e.preventDefault();
      this.addCharacter(this.characterName);
    },
  },
};
</script>

<style></style>
