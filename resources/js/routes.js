import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; // Crie esse componente
import Products from './components/Products.vue'; // Crie esse componente

const routes = [
  { path: '/', component: Home },
  { path: '/produtos', component: Products },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
