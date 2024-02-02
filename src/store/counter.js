export default {
  namespaced: true,
  state: () => ({
    count: 10
  }),
  actions: {
    increment(state, payload) {
      state.commit('increment');
    },
    decrement(state, payload) {
      state.commit('decrement');
    }
  },
  mutations: {
    increment(state, payload) {
      state.count++
    },
    decrement(state, payload) {
      state.count--
    },
  },
  getters: {
    getCounter(state) {
      return 'O total do count é ' + state.count;
    }
  }
}