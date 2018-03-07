import {HTTP} from "../../axios";

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
            let me = this;
            let url = Urls["board:boards_list"]() + '?rpp=' + value;
            HTTP.get(url).then(function(response) {
                store.commit('UPDATE_BOARDS', response.data.boards);
                store.commit('UPDATE_RPP', value);
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
}