import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke : ""
  },
  mutations: {
    setJoke : function(state,joke){
      state.joke = joke;
    }
  },
  actions: {
    requestJoke : function(contex){
        axios.request({
            url : "https://geek-jokes.sameerkumar.website/api?format=json",
            method : "GET"
        }).then((response) => {
            console.log(response);
            console.log(response.data.joke);
            contex.commit('setJoke', response.data.joke)
        }).catch((error) => {
            console.error("There was an error" +error);
        })
      }
      },
  getters: {
    getSnake : function(state){
      return state.joke.replaceAll(' ', "_")
    },
    getLoud : function(state){
      return state.joke.toUpperCase();
    }
  },
});
