import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: [],
    cart: []
  },
  mutations: {
    addToCart(state, payload){
      state.cart.push(payload)
    },
    removeItem(state, payload){
      state.cart.splice(payload, 1)
    },
    setInventory(state, payload){
      state.inventory = payload
    },
    clearCart(state){
      state.cart = []
    }
  },
  actions: {
    addToCart(context, payload){
      context.commit('addToCart', payload)
    }
  },
  getters: {
    getInventory(state){
      return state.inventory
    },
    getCart(state){
      return state.cart
    }
  }
})
