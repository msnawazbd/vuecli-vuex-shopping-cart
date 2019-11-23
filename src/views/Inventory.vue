<template>
  <div class="col-md-6">

    <div v-if="!loading" class="row">
      <div class="col-md-4 mb-4 pb-2" v-for="(item, index) in items" :key="index">
        <div class="card">
          <router-link tag="div" :to="{ path: '/details/' + item.id }">
            <img :src="item.photo" class="card-img-top" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
          </router-link>
          <div class="card-footer">
            <a @click.prevent="addToCart(item)" class="btn btn-primary">{{ item.price }}</a>
          </div>
        </div>
      </div>
    </div>

    <h3 v-else>Loading...</h3>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        loading: true
      }
    },
    methods: {
      addToCart(item){
        // this.$emit('addedNewItem', item)
        this.$store.dispatch('addToCart', item)
      },
      loadInventory(){
        var self = this
        axios.get('http://localhost:3000/items')
                .then(response => {
                  setTimeout(function () {
                    self.$store.commit('setInventory', response.data)
                    self.loading = false
                  }, 1000)
                })
                .catch(errors => console.log(errors))
      }
    },
    computed :{
      items(){
        return this.$store.getters.getInventory
      }
    },
    mounted() {
      this.loadInventory()
    }
  }
</script>
