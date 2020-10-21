<template>
  <div id="app">
    <div class="top-bar">
      <AddCharacterComponent />
      <FilterCharactersComponent />
      <RecordSizeComponent />
    </div>
    <div class="container">
      <CharactersComponent />
    </div>
  </div>
</template>

<script>
import CharactersComponent from "./components/CharactersComponent";
import AddCharacterComponent from "./components/AddCharacterComponent";
import FilterCharactersComponent from "./components/FilterCharactersComponent";
import RecordSizeComponent from "./components/RecordSizeComponent";

export default {
  name: "App",
  components: {
    CharactersComponent,
    AddCharacterComponent,
    FilterCharactersComponent,
    RecordSizeComponent,
  },
};
</script>

<style>
.top-bar {
  display: flex;
  justify-content: space-evenly;
}
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
