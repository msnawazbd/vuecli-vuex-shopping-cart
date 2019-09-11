<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Super Shop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="form-inline my-2 my-lg-0" @click.prevent="search">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" name="keyword" v-model="keyword">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            keyword: ''
        }
    },
    methods: {
        search(){
            this.$emit('search', this.keyword)
        }
    }
}
</script>

<style lang="scss">

</style>
