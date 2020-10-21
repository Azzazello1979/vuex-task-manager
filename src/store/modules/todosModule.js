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
};
const mutations = {
  setCharacters: (state, characters) => {
    state.characters = characters;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
