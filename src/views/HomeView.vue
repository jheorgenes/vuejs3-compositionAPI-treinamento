<template>
  <!-- <button @click="store.commit('counter/increment')">Add</button> -->
  <button @click="increment">Add</button>
  <button @click="decrement">Remove</button>
  <!-- {{ store.state.counter.count }} -->
  {{ count }}
  <hr>
  <!-- {{ store.getters['counter/getCounter'] }} -->
  <!-- {{ totalCount }} -->

  <template v-if="data.length > 0">
    <button @click="hideUsers">HideUsers</button>
    <ul>
      <li v-for="(user, index) in data" :key="index">{{ user.firstName }}</li>
    </ul>
  </template>
  <template v-else>
    <button @click="getUsers">GetUsers</button>
  </template>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const count = computed(() => store.state.counter.count);
const data = computed(() => store.state.users.data);
const totalCount = computed(() => store.getters['counter/getCounter']);

const increment = () => store.commit('counter/increment');
const decrement = () => store.commit('counter/decrement');
const getUsers = () => store.dispatch('users/getUsers');
const hideUsers = () => store.commit('users/setUsers', []);
</script>