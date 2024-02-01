<template>
  <!-- <button @click="increment">Add</button> -->
  <!-- <button @click="store.dispatch('increment')">Add</button> -->
  <button @click="store.commit('increment')">Add</button>
  {{ store.state.count }}
  <hr>
  {{ store.getters.getCounter }}
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

function increment() {
  store.dispatch('increment');
}
</script>