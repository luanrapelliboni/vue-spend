import api from "../../services/api";

// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    getAllItems({ commit }) {
        api.getItems().then(response => {
            commit('setItems', response.data);
        });
    }
}

// mutations
const mutations = {
    setItems(state, items) {
        state.all = items;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}