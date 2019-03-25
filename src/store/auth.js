import { RepositoryFactory } from '../repositories/RepositoryFactory'
import Axios from 'axios'
const AuthRepository = RepositoryFactory.get('auth')

const state = {
  status: '',
  token: localStorage.getItem('x-access-token') || null,
  user: null
}
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => !!state.token && !!state.user,
  userProfile: state => state.user
}
const mutations = {

  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, payload) {
    state.status = 'success'
    state.token = payload.token
    state.user = payload.user
  },
  AUTH_ERROR (state) {
    state.status = 'error'
  },
  SET_USER (state, user) {
    state.user = user
  },
  LOGOUT (state) {
    state.status = ''
    state.token = ''
  }
}
const actions = {

  async register ({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      AuthRepository.register(user)
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('x-access-token', token)
          Axios.defaults.headers.common['x-access-token'] = token
          commit('AUTH_SUCCESS', { token, user })
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          localStorage.removeItem('x-access-token')
          reject(err)
        })
    })
  },

  async login ({ commit }, payload) {
    console.log('LOGIN')
    console.log('PAYLOAD', payload)
    return new Promise((resolve, reject) => {
      commit('AUTH_REQUEST')
      console.log('AUTH_REQUEST')
      AuthRepository.login({ name: payload.name, password: payload.password })
        .then(resp => {
          console.log('Resp:', resp)
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('x-access-token', token)
          Axios.defaults.headers.common['x-access-token'] = token
          commit('AUTH_SUCCESS', { token, user })
          resolve(resp)
        })
        .catch(err => {
          commit('AUTH_ERROR')
          localStorage.removeItem('x-access-token')
          reject(err)
        })
    })
  },

  async fetchUser ({ commit }) {
    const response = await AuthRepository.getMe()
    let user = response.data
    if (user) {
      commit('SET_USER', user)
    }
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('LOGOUT')
      localStorage.removeItem('x-access-token')
      delete Axios.defaults.headers.common['x-access-token']
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
