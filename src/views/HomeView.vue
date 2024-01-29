<template>
  <input type="text" placeholder="Search" v-model="userSearch" @keyup="search">

  <ul>
    <li v-for="(user, index) in users['users'].data" :key="index">{{ user.firstName }} {{ user.lastName }}</li>
  </ul>

  <Bootstrap5Pagination :data="users['users']" @pagination-change-page="handlePagination" :limit="2" :show-disabled="true"  size="default" align="center">
    <template #prev-nav>
      <span>&lt; Anterior</span>
    </template>
    <template #next-nav>
      <span>Próximo &gt;</span>
    </template>
  </Bootstrap5Pagination>

  <div v-html="userNotFound"></div>
</template>

<script setup>

import http from '@/services/http';
import _ from 'lodash';
import { onMounted, ref, reactive, computed } from 'vue';
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const users = reactive({ users: [] });
const userSearch = ref('');
const loading = ref(true);
const searched = ref(false);

const userNotFound = computed(() => {
  return (!loading.value && users['users'].data.length <= 0) ? '<span id="notFound">Nenhum usuário encontrado</span>' : '';
});

function handlePagination(page) {
  return searched.value ? searchUser(page) : getUsers(page);
}

async function getUsers(page = 1) {
  try {
    const { data } = await http.get('/api/users?page='+Number(page));
    users['users'] = data;
    loading.value = false;
  } catch (error) {
    console.log(error.response.data);
  }
}

onMounted(() => {
  getUsers();
});

async function searchUser(page = 1) {
  try {
    const { data } = await http.get('/api/users/search?page='+Number(page), {
      params: {
        user: userSearch.value
      }
    });

    if(!userSearch.value) {
      searched.value = false;
      getUsers();
      return;
    }
    
    searched.value = true;
    users['users'] = data;
  } catch (error) {
    console.log(error.response.data);
  }
}

const search = _.debounce(async () => {
  searchUser();
}, 1000);
</script>

<style>
#notFound {
  color: red;
}
</style>

