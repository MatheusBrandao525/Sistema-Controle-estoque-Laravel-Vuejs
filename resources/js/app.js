import './bootstrap';
import { createApp } from 'vue';
import Alpine from 'alpinejs';
import App from './components/App.vue';
import router from './routes';
import Products from './components/Products.vue';
import MenuLateral from './components/MenuLateral.vue';

window.Alpine = Alpine;

Alpine.start();

const app = createApp();
app.use(router);

app.component('app', App);
app.component('products', Products);
app.component('menulateral', MenuLateral);

app.mount("#app");
