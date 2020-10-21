import axios from "axios";

const state = {
  characters: [],
  filteredCharacters: [],
};
const getters = {
  allCharacters: (state) => state.characters,
  filteredCharacters: (state) => state.filteredCharacters,
};
const actions = {
  async fetchCharacters({ commit }) {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/characters"
    );
    //console.log(response.data);
    commit("setCharacters", response.data);
  },

  addCharacter({ commit }, characterName) {
    commit("setCharacter", characterName);
  },
  deleteCharacter({ commit }, url) {
    commit("removeCharacter", url);
  },
  filterDownCharacters({ commit }, filterText) {
    commit("filterCharacters", filterText);
  },
};
const mutations = {
  setCharacters: (state, characters) => {
    state.characters = characters;
    state.filteredCharacters = [...state.characters];
  },

  setCharacter: (state, characterName) => {
    let character = {
      aliases: [characterName],
      url:
        "https://www.anapioficeandfire.com/api/characters/" +
        Date.now().toString(),
    };
    state.characters.unshift(character);
    state.filteredCharacters = [...state.characters];
  },
  removeCharacter: (state, url) => {
    state.characters = [...state.characters.filter((c) => c.url !== url)];
    state.filteredCharacters = [...state.characters];
  },
  filterCharacters: (state, filterText) => {
    state.filteredCharacters = state.characters.filter((c) =>
      c.aliases[0].match(new RegExp(filterText, "i"))
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
