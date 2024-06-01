<!-- Content.vue -->
<template>
    <div class="content text-center text-white">
    <h1 class="text-6xl mb-4">SECJ3483 <br><span class="text-orange-500">Web Technology</span> <br>Course</h1>
    <p class="text-xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque expedita atque eveniet <br> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus <br> a quae totam ipsa illum minus laudantium?</p>
    <button class="bg-orange-500 text-black px-8 py-2 rounded-full transition transform hover:bg-white hover:scale-90"><a href="#">PARTICIPATE</a></button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Content',
};
</script>

<style scoped>
.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    color: #fff;
}

.content h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.content h1 .web-tech {
    font-size: inherit;
    color: #ff7200;
}

.content .par {
    font-size: 18px;
    margin-bottom: 20px;
}

.cn {
    background-color: #ff7200;
    color: #000;
    border: none;
    padding: 15px 30px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.cn:hover {
    background-color: #fff;
    transform: scale(0.9);
}
</style>
