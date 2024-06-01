<template>
    <nav class="bg-black bg-opacity-80 text-white fixed w-full flex items-center justify-between px-6 py-4 z-10">
      <div class="text-orange-500 text-2xl font-bold">SPACE.UTM.KL</div>
      <ul class="flex space-x-6">
        <li><router-link to="/" class="hover:text-orange-500">HOME</router-link></li>
        <li><router-link to="/about" class="hover:text-orange-500">ABOUT</router-link></li>
        <li><router-link to="/photos" class="hover:text-orange-500">PHOTOS</router-link></li>
        <li><router-link to="/profile" class="hover:text-orange-500">PROFILE</router-link></li>
      </ul>
      <div class="relative">
        <input v-model="searchQuery" @input="updateSearch" class="bg-transparent border-2 border-orange-500 rounded-full px-4 py-1 text-white focus:outline-none" type="search" placeholder="Type To Find">
        <button class="bg-orange-500 text-black rounded-full px-4 py-1 ml-2">Find</button>
      </div>
    </nav>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'NavBar',
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      ...mapActions(['updateSearch']),
    },
  };
  </script>
  
  <style scoped>
  /* Adjust styles as needed */
  </style>
  