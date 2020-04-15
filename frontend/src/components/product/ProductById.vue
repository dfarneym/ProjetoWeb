<template>
    <div class="product-by-id">
        <PageTitle icon="fa fa-file-o" :main="product.name" :sub="product.description" />
        <div class="product-content" v-html="product.content"></div>
    </div>
</template>

<script>
import { baseApiUrl } from '@/global'
import axios from 'axios'
import PageTitle from '../template/PageTitle'

export default {
    name: 'ProductById',
    components: { PageTitle },
    data: function() {
        return {
            product: {}
        }
    },
    mounted() {
        const url = `${baseApiUrl}/products/${this.$route.params.id}`
        axios.get(url).then(res => this.product = res.data)
    }
}
</script>

<style>
    .product-content {
        background-color: #FFF;
        border-radius: 8px;
        padding: 25px;
    }

    .product-content pre {
        padding: 20px;
        border-radius: 8px;
        font-size: 1.2rem;
        background-color: #1e1e1e;
        color: #FFF;
    }

    .product-content img {
        max-width: 100%;
    }

    .product-content :last-child {
        margin-bottom: 0px;
    }
</style>