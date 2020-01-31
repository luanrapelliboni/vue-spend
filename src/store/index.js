import Vue from 'vue'
import Vuex from 'vuex'
import items from './modules/items'
import score from './modules/score'
import scoreboard from './modules/scoreboard'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    items,
    score,
    scoreboard
  }
})
