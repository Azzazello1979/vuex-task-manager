import Vuex from "vuex";
import Vue from "vue";
import todosModule from "./modules/todosModule";

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    todosModule,
  },
});
