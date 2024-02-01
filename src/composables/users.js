import { reactive, onMounted } from 'vue';
import http from '@/services/http.js';

export function useUsers () {
  const users = reactive({ 'users': [] });

  onMounted(async () => {
    users['users'] = await getUsers();
  });

  async function getUsers() {
    try {
      const { data } = await http.get('/api/users');
      return data;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return {
    users
  }
}