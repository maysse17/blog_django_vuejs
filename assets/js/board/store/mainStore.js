import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from "../../axios"
import Rpp from './rpp'

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
        Rpp: Rpp
    },
    actions: {
        init (store) {
            let url = Urls["board:boards_list"]() + '?rpp=' + store.getters['Rpp/rpp'];
            HTTP.get(url).then(function(response) {
                store.commit('UPDATE_BOARDS', response.data.boards)
            }).catch(function (err) {
                console.log(err);
            });
        }
    },
    strict: true
})