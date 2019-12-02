export const state = () => ({
  token: true
})

export const mutations = {
  setToken (state, token) { state.token = token },
  clearToken () { state.token = null }
}

export const actions = {
  async login ({ commit, dispatch }, formData) {
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('mock-token'), 1000)
      })
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async createUser ({commit}, formData) {
    try {
console.log('create user', formData)
    } catch (e) {

    }
  },
  setToken ({ commit }, token) { commit('setToken', token) },
  logout ({ commit }) { commit('clearToken') }
}

export const getters = {
  isAuth: state => Boolean(state.token)
}
