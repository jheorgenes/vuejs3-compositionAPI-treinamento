<template>
  <!-- <Nav /> -->

  <router-view></router-view>

  <!-- <input type="text" placeholder="Search" @keyup="search"> -->
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import CountChild from './components/CountChild.vue';
import { ref, onMounted, reactive } from 'vue';
import _ from 'lodash'

const count = ref(0);

const img = ref(null); //Declarando uma variável para receber $refs
const product = ref([]);

/* O lodash serve para executar as funções com um tempo programado, conforme o tipo de atributo passado, como nos exemplos abaixo. */
/* Usando debounce: Ao iniciar digitação, aguarda parar de digitar e então é executado a espera (do tempo programado) e depois executado a função de callback */
const search = _.debounce(() => {
  console.log('search');
}, 1000);

/* Usando throttle: Quando é iniciado a digitação, é executado a espera (do tempo programado) e depois executado a função de callback */
// const search = _.throttle(() => {
//   console.log('search');
// }, 1000);

// function search() {
//   console.log('search');
// }

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
  // console.log(product.value);
})


</script>

<style scoped>
</style>
