import {HTTP} from "../../axios";
import {getPagesToDisplay} from "./utils/utils";

export default {
    namespaced: true,
    state: {
        rpp: 10
    },
    getters: {
        'rpp': (state) => state.rpp
    },
    mutations: {
        'UPDATE_RPP': (state, value) => {
            state.rpp = value;
        }
    },
    actions: {
        updateRpp (store, value) {
            let currentPage = store.rootGetters['Pagination/currentPage'];
            let url = Urls["board:boards_list"]() + '?rpp=' + value + '&page=' + currentPage;
            HTTP.get(url).then(function(response) {
                const pages = getPagesToDisplay(value, response.data.count, currentPage);
                store.commit('UPDATE_BOARDS', response.data.boards, { root: true });
                store.commit('UPDATE_RPP', value);
                store.commit('Pagination/UPDATE_LIST_PAGES', pages, { root: true });
            }).catch(function (error) {
               if (error.response.status == 404) {
                   let last_page_url = url.replace('&page=' + currentPage, '&page=last');
                   HTTP.get(last_page_url).then(function (response) {
                       let numPages = 0;
                       const remainder = response.data.count % value;
                       if (remainder) {
                           numPages = Math.floor(response.data.count / value) + 1;
                       } else {
                           numPages = Math.floor(response.data.count / value);
                       }
                       const pages = getPagesToDisplay(value, response.data.count, numPages);
                       store.commit('UPDATE_BOARDS', response.data.boards, { root: true });
                       store.commit('UPDATE_RPP', value);
                       store.commit('Pagination/UPDATE_LIST_PAGES', pages, { root: true });
                       store.commit('Pagination/CHANGE_CURRENT_PAGE', numPages, { root: true });
                   });
               }
            });
        }
    }
}