<template>
Likes: {{ likes }}
Comments: {{ comments }}
</template>

<script setup>
defineProps({
  likes: Number|String,
  comments: Number|String
})
</script>