import axios from "axios";

const state = {
  characters: [],
};
const getters = {
  allCharacters: (state) => state.characters,
};
const actions = {
  async fetchCharacters({ commit }) {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/characters"
    );
    console.log(response.data);
    commit("setCharacters", response.data);
  },

  addCharacter({ commit }, characterName) {
    commit("setCharacter", characterName);
  },
  deleteCharacter({ commit }, url) {
    commit("removeCharacter", url);
  },
};
const mutations = {
  setCharacters: (state, characters) => {
    state.characters = characters;
  },
  setCharacter: (state, characterName) => {
    let character = {
      aliases: [characterName],
      url:
        "https://www.anapioficeandfire.com/api/characters/" +
        Date.now().toString(),
    };
    state.characters.unshift(character);
  },
  removeCharacter: (state, url) => {
    state.characters = [...state.characters.filter((c) => c.url !== url)];
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
