<template>
  <Nav />

  <router-view></router-view>

  <img src="https://picsum.photos/200/300" alt="" id="img" ref="img">

  <ul>
    <li v-for="(product, index) in products" :key="index" ref="product">{{ product.name }}</li>
  </ul>
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import CountChild from './components/CountChild.vue';
import { ref, onMounted, reactive } from 'vue';

const count = ref(0);

const img = ref(null); //Declarando uma variável para receber $refs
const product = ref([]);

function add(value) {
  count.value += value
}

const products = reactive([
  {
    id: 1,
    name: 'Imac'
  },
  {
    id: 2,
    name: 'Teclado'
  }
])

onMounted(() => {
  // console.log(document.querySelector('#img'));
  // console.log(document.querySelectorAll('#product'));
  // console.log(img.value);
  console.log(product.value);
})


</script>

<style scoped>
</style>
