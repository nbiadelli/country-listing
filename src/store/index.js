import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    listCountry: [],
    searName: "",
    searchInput: "",
    searchSelect: "",
  },
  actions: {
    actionGetCountry({ commit }) {
      axios.get('https://restcountries.eu/rest/v2/all')
        .then(function (response) {
          commit("setList", response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },
  },
  mutations: {
    setList(state, payload) {
      state.listCountry = payload;
    },
    setSearchInput(state, payload) {
      state.searchInput = payload;
    },
    setSearchSelect(state, payload) {
      state.searchSelect = payload;
    },
  },
  getters: {
    filterInput(state) {
      const rg = new RegExp(state.searchInput, "ig");
      const filteredList = state.listCountry.filter((item) => rg.test(item.name));
      return filteredList;
    },

    filterSelect(state) {
      const filteredList = state.listCountry.filter((item) =>  state.searchSelect === item.region);
      return filteredList;
    },
  }
});
