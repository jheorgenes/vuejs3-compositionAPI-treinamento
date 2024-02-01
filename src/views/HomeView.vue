<template>
  <!-- <button @click="showSomething">Show</button> -->

  <!-- <teleport to="#input">
    <input type="text" ref="inputElement">
  </teleport> -->

  <button @click="open = !open">Mostrar modal</button>
  <teleport to="#lorem">
    <Modal v-if="open">
      Conteúdo do modal vai aqui.
    </Modal>
  </teleport>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showElement = ref(false);
const inputElement = ref(null);
const open = ref(false);

async function showSomething() {
  showElement.value = true;

  // setTimeout(() => {
  //   console.log(inputElement.value);
  // }, 1000);

  await nextTick(() => {
    inputElement.value.focus();
    // console.log(inputElement.value);
    console.log('focus');
  })

  console.log('carregou');
}
</script>
<style>
#app {
  color: red;
}
</style>