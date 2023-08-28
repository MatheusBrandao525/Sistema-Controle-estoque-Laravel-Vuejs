import { createRouter, createWebHistory } from 'vue-router';

// Importe os componentes que serão usados nas rotas
import Dashboard from './components/Dashboard.vue'; // Importe o componente do dashboard
import Products from './components/Products.vue';   // Importe outros componentes
import ProductDetails from './components/ProductDetails.vue';

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductDetails, name: 'product-details' },
  // Defina mais rotas conforme necessário
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
