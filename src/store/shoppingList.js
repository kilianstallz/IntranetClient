import { RepositoryFactory } from '../repositories/RepositoryFactory'
const ShoppingRepo = RepositoryFactory.get('shopping')

const state = {
  status: '',
  list: []
}
const getters = {
  itemList: state => state.list
}
const mutations = {
  FETCH_REQUEST (state) {
    state.status = 'loading'
  },
  FETCH_SUCCESS (state, payload) {
    state.status = 'success'
    state.list = payload
  },
  FETCH_ERROR (state) {
    state.status = 'error'
  }
}
const actions = {
  async fetchItems ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('FETCH_REQUEST')
      ShoppingRepo.getAllItems()
        .then(resp => {
          console.log(resp)
          commit('FETCH_SUCCESS', resp.data)
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          commit('FETCH_ERROR')
          reject(err)
        })
    })
  },
  async createItem ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('FETCH_REQUEST')
      ShoppingRepo.createItem(payload)
        .then(resp => {
          commit('FETCH_SUCCESS', resp.data)
          resolve(resp)
        })
        .catch(err => {
          commit('FETCH_ERROR')
          reject(err)
        })
    })
  },
  async deleteItems ({ dispatch }, payload) {
    await payload.forEach(obj => {
      ShoppingRepo.deleteItem(obj._id)
    })
    await dispatch('fetchItems')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
