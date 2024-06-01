<template>
    <div class="home text-center text-white py-20">
      <h1 class="text-6xl mb-4 font-bold">SECJ3483 <br> <span class="text-orange-500">Web Technology</span> <br> Course</h1>
      <p class="text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo error exercitationem velit repudiandae accusantium, animi libero nobis aspernatur iusto voluptas enim officiis totam sed quibusdam vitae quam laudantium non.</p>
      <button class="bg-orange-500 text-black px-8 py-2 rounded-full transition transform hover:bg-white hover:scale-90">
        PARTICIPATE
      </button>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    padding: 2rem;
  }
  h1 {
    font-size: 3rem;
    line-height: 1.2;
  }
  span {
    display: inline-block;
    margin-top: 0.5rem;
  }
  p {
    max-width: 800px;
    margin: 0 auto 1.5rem;
  }
  button {
    background-color: #ff7200;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  button:hover {
    background-color: #ffab40;
  }
  </style>
  