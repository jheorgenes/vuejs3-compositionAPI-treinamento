<template>
  <h2 id="app-products">Products</h2>
  <h2 id="my-app">Products my app</h2>

  <h2>Product 1</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi repellendus tempore odio voluptates natus corrupti modi mollitia, veniam omnis laudantium est porro ab? Laborum ipsum repellat nesciunt quibusdam culpa. Sunt.</p>

  <ProductInfo :likes="product.likes" :comments="product.comments" />
</template>

<script setup>
import ProductInfo from '@/components/ProductInfo.vue';
import { reactive } from 'vue';

const product = reactive({
  likes: 5,
  comments: 14
})
</script>

<style scoped>
#app-products {
  color: red;
}
</style>