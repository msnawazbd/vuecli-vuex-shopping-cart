<template>
    <div class="col-md-3">
        <ul class="list-group">
            <li class="list-group-item">
                <span class="item-name">Name</span>
                <span class="item-price float-right">Price</span>
            </li>

            <hr>
            <li class="list-group-item" v-for="(item, index) in items" :key="index">
                <span class="item-name">{{ item.title }} </span>
                <button class="btn btn-danger btn-sm" @click="removeToCart(index)">X</button>
                <span class="item-price float-right">$ {{ item.price}}</span>
            </li>

            <hr>
            <li class="list-group-item">
                <span class="item-name">Total</span>
                <span class="item-price float-right">$ {{ totalPrice }}</span>
            </li>
            <li class="list-group-item  text-center">
                <button class="btn btn-success btn-sm" @click.prevent="checkout">Checkout</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            removeToCart(index){
                // this.$emit('removeItem', index)
                this.$store.commit('removeItem', index)
            },
            checkout(){
                if(confirm('Are you sure to checkout ?')){
                    this.$store.commit('clearCart')
                }
            }
        },
        computed: {
            items(){
                return this.$store.getters.getCart
            },
            totalPrice(){
                var total = 0
                this.items.forEach(item => {
                    total += parseFloat(item.price)
                })
                return total . toFixed(2)
            }
        }
    }
</script>
