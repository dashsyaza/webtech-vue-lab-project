<template>
    <div class="flex items-center justify-center min-h-screen">
      <div class="container mx-auto p-4 bg-orange-100 rounded shadow-lg max-w-lg">
        <h1 class="text-3xl mb-6 text-center">Profile</h1>
        <form @submit.prevent="saveProfile" class="space-y-4">
          <table class="min-w-full bg-orange-100">
            <tr>
              <td class="border px-4 py-2 font-bold">Name:</td>
              <td class="border px-4 py-2">
                <input v-model="localProfile.name" class="input w-full">
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-bold">Course Year:</td>
              <td class="border px-4 py-2">
                <input v-model="localProfile.courseYear" class="input w-full">
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-bold">Matric No:</td>
              <td class="border px-4 py-2">
                <input v-model="localProfile.matricNo" class="input w-full">
              </td>
            </tr>
            <tr>
              <td class="border px-4 py-2 font-bold">Address:</td>
              <td class="border px-4 py-2">
                <textarea v-model="localProfile.address" class="input w-full"></textarea>
              </td>
            </tr>
          </table>
          <div class="flex space-x-4 mt-4">
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-full">Save</button>
            <button type="button" class="bg-red-500 text-white px-4 py-2 rounded-full" @click="resetProfile">Reset</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Profile',
    data() {
      return {
        localProfile: { ...this.$store.state.profile }
      };
    },
    computed: {
      ...mapState(['profile']),
    },
    methods: {
      ...mapActions(['saveProfile', 'resetProfile']),
      saveProfile() {
        this.$store.dispatch('saveProfile', { ...this.localProfile });
      },
      resetProfile() {
        this.localProfile = { ...this.$store.state.profile };
      }
    },
  };
  </script>
  
  <style scoped>
  .input {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: 100%;
    background-color: #fff;
  }
  </style>
  