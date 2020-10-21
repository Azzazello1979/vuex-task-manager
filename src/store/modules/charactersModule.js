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
};
const mutations = {
  setCharacters: (state, characters) => {
    state.characters = characters;
  },
  setCharacter: (state, characterName) => {
    let character = {
      aliases: [characterName],
      url: Date.now(),
    };
    state.characters.unshift(character);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
