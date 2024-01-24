<template>
  <form action="" @submit.prevent="create">
    <input type="text" placeholder="FirstName" v-model="user.firstName">
    <span v-if="errors['errors'].firstName" class="error">{{ errors['errors'].firstName[0] }}</span>
    <input type="text" placeholder="LastName" v-model="user.lastName">
    <span v-if="errors['errors'].lastName" class="error">{{ errors['errors'].lastName[0] }}</span>
    <input type="text" placeholder="email" v-model="user.email">
    <span v-if="errors['errors'].email" class="error">{{ errors['errors'].email[0] }}</span>
    <input type="text" placeholder="password" v-model="user.password">
    <span v-if="errors['errors'].password" class="error">{{ errors['errors'].password[0] }}</span>
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script setup>

import http from '@/services/http';
import { reactive } from 'vue';

const user = reactive({});
const errors = reactive({ errors: []}); //Para capturar os erros, é necessário criar a propriedade'errors' como array ou json para conseguir anexar os erros

async function create() {
  try {
    const { data } = await http.post('api/user', user);
    console.log(data);
  } catch (error) {
    if(error.response?.data) {
      errors['errors'] = error.response?.data['errors'];
    }
    console.log(error.response?.data);
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>