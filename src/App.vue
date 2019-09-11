<template>
  <div id="app">
    <navbar @search="search"></navbar>
    <section id="main-content" class="mt-5">
      <div class="container">
        <div class="row">
          <inventory @addedNewItem="addCartItem" :items="items"></inventory>
          <cart @removeItem="removeCartItem" :items="cart"></cart>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Inventory from './components/Inventory'
  import Cart from './components/Cart'
  import data from './data'

export default {
  components: {
    Navbar, Inventory, Cart
  },
  data(){
    return {
      items: [],
      cart: []
    }
  },
  methods:{
    addCartItem(item){
      this.cart.push(item)
    },
    removeCartItem(index){
      this.cart.splice(index, 1)
    },
    search(keyword){
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    }
  },
  mounted() {
    this.items = data
  }
}
</script>

<style lang="scss">

</style>
