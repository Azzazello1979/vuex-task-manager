import axios from "axios";

const state = {
  todos: [
    { id: 1, title: "Todo1" },
    { id: 2, title: "Todo2" },
    { id: 3, title: "Todo3" },
  ],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {
  async fetchCharacters() {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/characters"
    );
    console.log(response.data);
  },
};
const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
