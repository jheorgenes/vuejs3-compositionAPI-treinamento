<template>
  <Nav />

  <router-view></router-view>
  <br>
  <br>
  <button @click="count++">add count - {{ count }}</button>

  <!-- <CountChild @addCount="count++" /> -->
  <!-- <CountChild @addCount="(value) => count+= value" /> -->
  <CountChild @addCount="add" />
</template>

<script setup>
import Nav from '@/components/Nav.vue';
import CountChild from './components/CountChild.vue';
import { ref } from 'vue'

const count = ref(0);

function add(value) {
  count.value += value
}

</script>

<style scoped>
</style>
