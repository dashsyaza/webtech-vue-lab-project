import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Profile from '../components/Profile.vue';
import Photos from '../components/Photos.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/photos', name: 'Photos', component: Photos },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
