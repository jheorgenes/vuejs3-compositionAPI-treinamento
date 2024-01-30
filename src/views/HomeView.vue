<template>
  <input type="text" v-model="user.firstName" placeholder="FirstName">
  <input type="text" v-model="user.lastName" placeholder="LastName">
  <hr>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item.name }} <input type="text" v-model="item.name"> </li>
  </ul>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';

const firstName = ref('');
const lastName = ref('');

// watch([firstName, lastName], ([valueFirstName, valueLastName], [oldValueFirstName, oldValueLastName]) => {
//   console.log('new => ', valueFirstName);
// });

// watch(lastName, (value, oldValue) => {
//   console.log('new => ', value);
//   console.log('old => ', oldValue);
// });

const user = reactive({
  firstName: '',
  lastName: ''
});

const items = reactive([
  {
    id: 1,
    name: 'Alexandre'
  },
  {
    id: 2,
    name: 'João'
  }
]);

// watch(
//   () => user.firstName, 
//   (value, oldValue) => {
//     console.log('new => '+ value);
//     console.log('old => ' + oldValue);
//   }
// );

// Observando um objeto completo
// watch(user, (value) => {
//   console.log(value);
// });

// Observando um array completo
// watch(
//   items, (value) => {
//     value.forEach((item) => {
//       if(!Number.isInteger(Number(item))){
//         console.log('not a number ' + item.name);
//       }
//     });
//   }
// );
</script>