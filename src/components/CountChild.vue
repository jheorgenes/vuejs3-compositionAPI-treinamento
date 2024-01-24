<template>
  <!-- <button @click="$emit('addCount')">Add count from child component</button> -->
  <button @click="add">Add count from child component</button>
</template>

<script setup>

const emit = defineEmits(['addCount']); //Definindo propriedades que serão emitidas

function add() {
  emit('addCount', 10); //Emitindo para o componente pai
}
</script>