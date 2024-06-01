<template>
    <div class="flex items-center justify-center min-h-screen">
      <div class="container mx-auto p-4 bg-orange-100 rounded shadow-lg max-w-lg">
        <h1 class="text-3xl mb-6 text-center">About</h1>
        <table class="min-w-full bg-orange-100">
          <tr>
            <td class="border px-4 py-2 font-bold">Name:</td>
            <td class="border px-4 py-2">{{ profile.name }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-bold">Course Year:</td>
            <td class="border px-4 py-2">{{ profile.courseYear }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-bold">Matric No:</td>
            <td class="border px-4 py-2">{{ profile.matricNo }}</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-bold">Address:</td>
            <td class="border px-4 py-2">{{ profile.address }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'About',
    computed: {
      ...mapGetters(['profile']),
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  td {
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #fff;
  }
  </style>
  