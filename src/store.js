import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// read these value at every page load
let cart = window.localStorage.getItem('cart')

export default new Vuex.Store({
  state: {
    inventory: [],
    cart: cart ? JSON.parse(cart) : [],
  },
  mutations: {
    addToCart(state, payload){
      // state.cart.push(payload)

      let found = state.cart.find(product => product.id == payload.id);

      if (found) {
        found.quantity ++;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.cart.push(payload);

        Vue.set(payload, 'quantity', 1);
        Vue.set(payload, 'totalPrice', payload.price);
      }
      // save cart in local storage
      this.commit('saveCart');
    },
    removeItem(state, payload){
      state.cart.splice(payload, 1);
      // save cart in local storage
      this.commit('saveCart');
    },
    increaseItem(state, payload){
      let found = state.cart.find(product => product.id == payload.id);

      found.quantity ++;
      found.totalPrice = found.quantity * found.price;

      // save cart in local storage
      this.commit('saveCart');
    },
    decreaseItem(state, payload){
      let found = state.cart.find(product => product.id == payload.id);
      let index = state.cart.indexOf(payload);

      if(found.quantity > 1){
        found.quantity --;
        found.totalPrice = found.quantity * found.price;
      } else {
        state.cart.splice(index, 1);
      }

      // save cart in local storage
      this.commit('saveCart');
    },
    setInventory(state, payload){
      state.inventory = payload;
    },
    clearCart(state){
      state.cart = [];
      // save cart in local storage
      this.commit('saveCart');
    },
    saveCart(state) {
      window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }
  },
  actions: {
    addToCart(context, payload){
      context.commit('addToCart', payload);
    },
    increaseItem(context, payload){
      context.commit('increaseItem', payload);
    },
    decreaseItem(context, payload){
      context.commit('decreaseItem', payload);
    }
  },
  getters: {
    getInventory(state){
      return state.inventory
    },
    getCart(state){
      return state.cart
    }
  },
})
