import Vue from "vue";
import Vuex from "vuex";
import * as deck from "@/store/modules/deck";
import * as notification from "@/store/modules/notification";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    deck,
    notification
  },
  state: {}
});
