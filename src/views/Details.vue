<template>
    <div class="col-md-9">
        <div v-if="item" class="row">
            <div class="col-md-6">
                <img :src="item.photo" alt="Photo">
            </div>
            <div class="col-md-6">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
                <div>
                    <p class="float-left">$ {{ item.price }}</p>
                    <button class="btn btn-primary btn-sm float-right" @click.prevent="addToCart(item)"> + Add</button>
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
            item: null
        }
    },
    methods: {
        loadItem(){
            axios.get('http://localhost:3000/item/' + this.$route.params.id)
                .then(response => {
                    var self = this
                    self.item = response.data
                })
                .catch(errors => console.log(errors))
        },
        addToCart(item){
            this.$store.dispatch('addToCart', item)
        }
    },
    mounted() {
        this.loadItem()
    }
}
</script>
