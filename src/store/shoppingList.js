import { RepositoryFactory } from '../repositories/RepositoryFactory'
const ShoppingRepo = RepositoryFactory.get('shopping')

const state = {
  status: '',
  items: []
}
const getters = {
  itemList: state => state.items
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
          commit('FETCH_SUCCESS', resp)
        })
        .catch(err => {
          console.log(err)
          commit('FETCH_ERROR')
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
