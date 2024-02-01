<template>
  <button @click="increment">Add</button>
  {{ count }}
  <hr>
  <ul>
    <li v-for="(user, index) in users['users']" :key="index">{{ user.firstName }}</li>
  </ul>
</template>

<script setup>

import { useCount } from '@/composables/count.js';
import { useUsers } from '@/composables/users.js';
import { onMounted } from 'vue';

const { count, increment } = useCount();
const { users } = useUsers();

onMounted(() => {
  console.log('onMounted no componenete do HomeView');
})
</script>