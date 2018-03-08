import {HTTP} from '../../axios';
import {getPagesToDisplay} from './utils/utils';

export default {
    namespaced: true,
    state: {
        currentPage: 1,
        pages: [],
    },
    getters: {
        'currentPage': (state) => state.currentPage,
        'pages': (state) => state.pages
    },
    mutations: {
        'UPDATE_LIST_PAGES': (state, pagesList) => {
            state.pages = pagesList
        },
        'CHANGE_CURRENT_PAGE': (state, page) => {
            state.currentPage = page
        },
    },
    actions: {
        updatePage({commit, rootGetters}, currentPage) {
            let rpp = rootGetters['Rpp/rpp'];
            const url = Urls['board:boards_list']() + '?rpp=' + rpp + '&page=' + currentPage;
            HTTP.get(url).then(function(response) {
                const pages = getPagesToDisplay(rpp, response.data.count, currentPage);
                commit('UPDATE_BOARDS', response.data.boards, { root: true });
                commit('CHANGE_CURRENT_PAGE', currentPage);
                commit('UPDATE_LIST_PAGES', pages);
            }).catch(function (err) {
                console.log(err);
            });
        },
    }
}