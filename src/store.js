import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './store/auth'
import ShoppingList from './store/shoppingList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Auth,
    ShoppingList
  }
})
