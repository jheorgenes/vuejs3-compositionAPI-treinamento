<template>
  <input type="text" v-model="userName">

  <template v-for="user in users" :key="user.id">
    <input type="checkbox" @click="userName = user.firstName" :checked="userName == user.firstName"> {{ user.firstName }}
  </template>

  <select v-model="userName">
    <option :value="user.firstName" v-for="user in users" :key="user.id">{{ user.firstName }}</option>
  </select>
</template>

<script setup>
import { reactive, ref } from 'vue';

const users = reactive([
  {
    id: 1,
    firstName: 'Alexandre'
  },
  {
    id: 2,
    firstName: 'João'
  },
  {
    id: 3,
    firstName: 'Maria'
  },
])

const userName = ref('Alexandre');
</script>

<style scoped>

</style>
