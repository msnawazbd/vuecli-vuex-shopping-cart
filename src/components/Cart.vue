<template>
    <div class="col-md-6">
        <!--<ul class="list-group">
            <li class="list-group-item">
                <span class="item-name">Name</span>
                <span class="item-price float-right">Price</span>
            </li>

            <hr>
            <li class="list-group-item" v-for="(item, index) in items" :key="index">
                <span class="item-name">{{ item.title }} </span>
                <span class="item-name">{{ item.quantity }} </span>
                <button class="btn btn-danger btn-sm" @click="removeToCart(index)">X</button>
                <span class="item-price float-right">$ {{ item.price}}</span>
            </li>

            <hr>
            <li class="list-group-item" v-if="items.length > 0">
                <span class="item-name">Total</span>
                <span class="item-price float-right">$ {{ totalPrice }}</span>
            </li>
            <li class="list-group-item  text-center" v-if="items.length > 0">
                <button class="btn btn-success btn-sm" @click.prevent="checkout">Checkout</button>
            </li>
        </ul>-->
        <h4>Cart <span v-if="items.length > 0">({{ items.length }})</span></h4>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th class="text-center">X</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in items" :key="index">
                <td>{{ item.title }}</td>
                <td>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-secondary" type="button" @click="decreaseToCart(item)"> - </button>
                        </div>
                        <input type="text" class="form-control" :value="item.quantity">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" @click="increaseToCart(item)"> + </button>
                        </div>
                    </div>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.totalPrice }}</td>
                <td class="text-center">
                    <button class="btn btn-danger btn-sm" @click="removeToCart(index)">X</button>
                </td>
            </tr>
            </tbody>
            <tfoot v-if="items.length > 0">
            <tr>
                <td colspan="3">Total</td>
                <td>{{ totalPrice }}</td>
                <td></td>
            </tr>
            <tr>
                <td class="text-center" colspan="5">
                    <button class="btn btn-success btn-sm" @click.prevent="checkout">Checkout</button>
                </td>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    export default {
        methods: {
            removeToCart(index){
                // this.$emit('removeItem', index)
                this.$store.commit('removeItem', index)
            },
            increaseToCart(item){
                // this.$emit('removeItem', index)
                this.$store.dispatch('increaseItem', item)
            },
            decreaseToCart(item){
                // this.$emit('removeItem', index)
                this.$store.dispatch('decreaseItem', item)
            },
            checkout(){
                if(confirm('Are you sure to checkout ?')){
                    let data = {
                        cart: JSON.stringify(this.$store.state.cart)
                    }
                    console.log(data)

                    // send the cart data to the server using axios
                    // axios.post('/your-checkout-endpoint', data);

                    // can parse the data on the Laravel (PHP) side like this
                    // $cart = json_decode(request('cart'));

                    // clear cart data
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
                    total += parseFloat(item.totalPrice)
                })
                return total . toFixed(2)
            }
        }
    }
</script>
