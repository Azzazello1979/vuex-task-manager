import Vuex from "vuex";
import Vue from "vue";
import charactersModule from "./modules/charactersModule";

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    charactersModule,
  },
});
