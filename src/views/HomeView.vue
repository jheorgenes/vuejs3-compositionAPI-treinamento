<template>
  <h2>Admin</h2>

  <ul>
    <template v-for="(user, index) in users" :key="index">
      <li v-if="user.is_Admin">{{ user.firstName }}</li>
    </template>
  </ul>

  <h2>Not Admin</h2>

  <ul>
    <li v-for="(user, index) in usersNotAdmin" :key="index">{{ user.firstName }}</li>
  </ul>

  {{ countComputed }}
  <button @click="computedCount++">Add computed</button>
  <br>
  {{ countFunction() }}
  <button @click="functionCount++">Add function</button>
</template>

<script setup>

import { computed, reactive, ref } from 'vue';

const user = reactive({
    firstName: 'Alexandre',
    lastName: 'Cardoso'
});

const computedCount = ref(0);
const functionCount = ref(0);

const users = reactive([
  {
    firstName: 'Alexandre',
    is_Admin: 1
  },
  {
    firstName: 'Maria',
    is_Admin: 0
  },
  {
    firstName: 'João',
    is_Admin: 0
  },
  {
    firstName: 'Pedro',
    is_Admin: 1
  },
]);

const fullName = computed(() => {
  return user.firstName + ' ' + user.lastName;
});

const usersNotAdmin = computed(() => {
  return users.filter((user) => user.is_Admin === 0);
});

const countComputed = computed(() => {
  console.log('called computed count');
  return computedCount.value;
})

function countFunction() {
  console.log('called function count');
  return functionCount.value;
}
</script>

