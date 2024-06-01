<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl mb-6 text-white">Photos</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="photo in filteredPhotos" :key="photo.id" class="photo bg-white rounded shadow-md p-4">
          <img :src="photo.thumbnailUrl" :alt="photo.title" class="w-full h-auto rounded">
          <p class="mt-2 text-center">{{ photo.title }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapState } from 'vuex';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Photos',
    data() {
      return {
        photos: [],
      };
    },
    computed: {
      ...mapState(['searchQuery']),
      filteredPhotos() {
        return this.photos.filter(photo => photo.title.includes(this.searchQuery)).slice(0, 10);
      },
    },
    created() {
      this.fetchPhotos();
    },
    methods: {
      async fetchPhotos() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        this.photos = response.data;
      },
    },
  };
  </script>
  
  <style scoped>
  .photo {
    margin: 10px;
  }
  img {
    max-width: 100px;
  }
  </style>
  