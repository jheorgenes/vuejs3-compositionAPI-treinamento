<template>
<ul>
  <!-- Aqui, além da iteração da lista, está sendo passado o conteúdo da iteração no 'escopo' do slot, através do (v-bind:product="product")  -->
  <slot v-for="(product, index) in products" :key="index" v-bind:product="product"></slot>
</ul>
</template>

<script setup>

defineProps(['products']);
</script>