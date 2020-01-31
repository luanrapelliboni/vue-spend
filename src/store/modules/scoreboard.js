
// initial state
const state = {
    all: []
}

// getters
const getters = {}

// actions
const actions = {
    addItem({ commit }, item) {
        commit('add', item);
    },
    removeItem({ commit }, item) {
        commit('remove', item);
    }
}

// mutations
const mutations = {
    add(state, obj) {
        let found = state.all.findIndex(el => el.id === obj.item.id);
        if (found > -1) {
            state.all = state.all.map(
                (item, i) => i === found ? { ...item, quantity: obj.quantity }
                    : item);
        } else {
            obj.item.quantity = obj.quantity;
            state.all.push(obj.item);
        }
    },
    remove(state, obj) {
        if (obj.quantity === 0) {
            state.all = state.all.filter(item => obj.item.id !== item.id);
        } else {
            let found = state.all.findIndex(el => el.id === obj.item.id);
            if (found > -1) {
                state.all = state.all.map(
                    (item, i) => i === found ? { ...item, quantity: obj.quantity }
                        : item);
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}