export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) { state.token = token },
  clearToken () { state.token = null }
}

export const actions = {
  async login ({ commit, dispatch }, formData) {
    try {
      const { token } = this.$axios.$post('/api/auth/admin/login', formData)
      //console.log('token', token)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, { root: true })
      //throw e
    }
  },
  async createUser ({ commit }, formData) {
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
