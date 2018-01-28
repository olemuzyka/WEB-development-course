import Vue from "vue"
import Vuex from 'vuex'

import books from './modules/books'
import orders from './modules/orders'
import dialogStatus from './modules/dialog'

Vue.use(Vuex)

export const store = new Vuex.Store({
	modules: {
		books,
    orders,
		dialogStatus
	},
  state: {
    searchValue: '',
  },
  getters: {
    searchValue: state => {
      return state.searchValue
    }
  },
  mutations: {
    setSearchQ: (state, payload) => {
      state.searchValue = payload
    }
  }
})
