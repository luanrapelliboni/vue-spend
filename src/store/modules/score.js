
// initial state
const state = {
    total: 90000000000
}

// getters
const getters = {}

// actions
const actions = {
    sum({ commit }, item) {
        let current = state.total;
        //let total = current + (item.price * ((item.quantity == 0) ? 1 : item.quantity));
        let total = current + item.price;
        commit('setTotal', total);
    },
    sub({ commit }, item) {
        let current = state.total;
        // let total = current - (item.price * ((item.quantity == 0) ? 1 : item.quantity));
        let total = current - item.price;
        commit('setTotal', total);
    }
}

// mutations
const mutations = {
    setTotal(state, total) {
        state.total = total;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}