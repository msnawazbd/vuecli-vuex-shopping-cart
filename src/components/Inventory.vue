<template>
    <div class="col-md-9">
        <div class="row">

            <div class="col-md-4 mb-4 pb-2" v-for="(item, index) in items" :key="index">
                <div class="card">
                    <img :src="item.photo" class="card-img-top" :alt="item.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title}}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a @click.prevent="addToCart(item)" class="btn btn-primary">{{ item.price }}</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        methods: {
            addToCart(item){
                this.$emit('addedNewItem', item)
            }
        }
    }
</script>
