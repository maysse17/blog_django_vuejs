import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from "../../axios"
import rpp from './rpp'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        boards: []
    },
    getters: {
        boards: (state) => state.boards
    },
    mutations: {
        'UPDATE_BOARDS': (state, data) => {
            state.boards = data;
        }
    },
    modules: {
        rpp
    },
    actions: {
        init ({commit, rootGetters}) {
            let me = this;
            let url = Urls["board:boards_list"]() + '?rpp=' + rootGetters.rpp;
            HTTP.get(url).then(function(response) {
                commit('UPDATE_BOARDS', response.data.boards)
            }).catch(function (err) {
                console.log(err);
            });
        }
    },
    strict: true
})