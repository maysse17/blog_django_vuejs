export default {
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

        }
    }
}