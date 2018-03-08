import Vue from 'vue'
import Vuex from 'vuex'
import {HTTP} from '../../axios'
import Rpp from './rpp'
import Pagination from './pagination'
import {getPagesToDisplay} from "./utils/utils";

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
        Rpp: Rpp,
        Pagination: Pagination
    },
    actions: {
        init (store) {
            let rpp = store.getters['Rpp/rpp'];
            let currentPage = store.getters['Pagination/currentPage'];
            let url = Urls['board:boards_list']() + '?rpp=' + rpp;
            HTTP.get(url).then(function(response) {
                const pages = getPagesToDisplay(rpp, response.data.count, currentPage);
                store.commit('Pagination/UPDATE_LIST_PAGES', pages);
                store.commit('UPDATE_BOARDS', response.data.boards);
            }).catch(function (err) {
                console.log(err);
            });
        }
    },
    strict: true
})