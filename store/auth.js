import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwtdecode from 'jwt-decode'

export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) { state.token = token },
  clearToken (state) { state.token = null }
}

export const actions = {
  async login ({ commit, dispatch }, formData) {
    try {
      const { token } = await this.$axios.$post('/api/auth/admin/login', formData)
      //console.log('token', token)
      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e.response.data.message, { root: true })// + ' | ' + Date.now()
      //console.log('setError', e)
      throw e
    }
  },
  async createUser ({ commit }, formData) {
    try {
      await this.$axios.$post('/api/auth/admin/create', formData)
      console.log('create user', formData)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  setToken ({ commit }, token) {
    this.$axios.setToken(token, 'BEARER')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },
  logout ({ commit }) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token')
  },
  autoLogin ({ dispatch }) {
    //console.log('autologin', this.app.context.req)
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJWTvalid(token)) {
      dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuth: state => Boolean(state.token),
  token: state => state.token
}

function isJWTvalid (token) {
  if (!token) { return false }

  const JWTdata = jwtdecode(token) || {}
  const expires = JWTdata.exp || 0
  return (new Date().getTime() / 1000) < expires
}
