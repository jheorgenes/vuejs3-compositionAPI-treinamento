<template>
  {{ store.state.counter.count }}
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore();

</script>