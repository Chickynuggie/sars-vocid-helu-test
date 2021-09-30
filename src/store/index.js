import { createStore } from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = new createStore({
  state: {
    globalCovidData: [],
    countriesCovidData: [],
    countryNames: []
  },
  mutations,
  actions,
  getters
});

export default store;
