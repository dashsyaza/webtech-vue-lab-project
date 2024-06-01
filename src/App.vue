<template>
  <div id="app" class="relative min-h-screen">
    <div class="absolute inset-0 bg-cover bg-center filter blur-sm" :style="{ backgroundImage: 'url(@/assets/3.jpg)' }"></div>
    <div class="relative z-10">
      <Navbar />
      <div class="container mx-auto pt-16">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  background-image: url('@/assets/3.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
.filter.blur-sm {
  filter: blur(8px);
  filter:brightness(-70);
}
</style>
