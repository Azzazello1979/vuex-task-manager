<template>
  <div>
    <h3>Characters:</h3>
    <div class="todos">
      <div
        class="todo"
        v-for="character in filteredCharacters"
        :key="character.url"
      >
        {{ character.aliases[0] }}
        <i
          class="fas fa-trash-alt"
          @click="onDeleteCharacter(character.url)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CharactersComponent",
  methods: {
    ...mapActions(["fetchCharacters", "deleteCharacter"]),
    onDeleteCharacter(url) {
      this.deleteCharacter(url);
    },
  },
  computed: {
    ...mapGetters(["filteredCharacters"]),
  },
  created() {
    this.fetchCharacters();
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
