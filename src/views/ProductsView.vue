<template>
  <!-- O argumento do slot: (v-slot="props") é chamado de 'props' por convenção, mas poderia receber qualquer nome -->
  <!-- Esse v-slot permite ter acesso a propriedades que estão dentro do escopo do v-slot do componente chamado -->
  <Products :products="products" v-slot="props">
    <li @click="getProduct(props.product.id)">{{ props.product.name }}</li><!-- Aqui está sendo inserido cada propriedade recuperada do scopo do v-slot -->
  </Products>
</template>

<script setup>
import ProductInfo from '@/components/ProductInfo.vue';
import Products from '@/components/Products.vue';
import { reactive } from 'vue';

const product = reactive({
  likes: 5,
  comments: 14
});

const products = reactive([
  {
    id: 1,
    name: 'Imac'
  },
  {
    id: 2,
    name: 'MackBoor'
  },
  {
    id: 3,
    name: 'Mouse'
  },
]);

function getProduct(id) {
  console.log(id);
}
</script>

<style scoped>
#app-products {
  color: red;
}
</style>