<template>
  <button @click="openModal = true">Modal</button>
  <br>
  <Modal v-if="openModal" @close="openModal = false">
    <template #header>Header do Modal</template>
    <template #default>
      <form action="">
        <input type="text" placeholder="Email">
        <input type="text" placeholder="Senha">
        <button>Login</button>
      </form>
    </template>
    <template #footer>Footer do Modal</template>
  </Modal>
</template>

<script setup>

import { computed, reactive, ref } from 'vue';
import Modal from '@/components/Modal.vue';

const user = reactive({
    firstName: 'Alexandre',
    lastName: 'Cardoso'
});

const openModal = ref(false);

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

