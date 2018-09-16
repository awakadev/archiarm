import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trigger: {
      header: false
    }
  },
  getters: {
    trigger (state) {
      return state.trigger
    }
  },
  mutations: {
    SET_TRIGGER (state, payload) {
      Object.assign(state.trigger, payload)
    }
  },
  actions: {
    setTrigger ({ commit }, payload) {
      commit('SET_TRIGGER', payload)
    },
    clickPage ({ state, commit }, payload) {
      if (!state.trigger.header) {
        document.getElementById('trigger-header').click()
        commit('SET_TRIGGER', { header: true })
      }
      document.getElementById('trigger-page').click()
    }
  }
})
